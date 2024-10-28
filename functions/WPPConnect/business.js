const Sessions = require("../../controllers/SessionsController");
const logger = require("../../util/logger");

module.exports = class Business {
    static async getAllLabels(req, res) {

        try {

            let data = await Sessions.getClient(req.body.session)
            let response = await data.client.getAllLabels()

            res.status(200).json({
                "result": 200,
                "token": response
            })

        } catch (error) {

            logger.error(`Error on getClientTokenBrowser: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

    static async addNewLabel(req, res) {

        try {
            let data = await Sessions.getClient(req.body.session)
            let response = await data.client.addNewLabel(req.body.name)

            res.status(200).json({
                "result": 200,
                "token": response
            })

        } catch (error) {

            logger.error(`Error on getClientTokenBrowser: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

    static async addOrRemoveLabels(req, res) {

        try {
            let data = await Sessions.getClient(req.body.session)
            let response = await data.client.addOrRemoveLabels([req.body.number+'@c.us'], req.body.actions)

            res.status(200).json({
                "result": 200,
                "token": response
            })

        } catch (error) {

            logger.error(`Error on getClientTokenBrowser: ${error?.message}`)

            res.status(400).json({
                response: false,
                data: error?.message
            });
        }

    }

}
