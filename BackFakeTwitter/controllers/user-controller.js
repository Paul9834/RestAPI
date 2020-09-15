const dbManager = require('../database/db-manager')


function createUser(request, response) {


    if (!request.body) {
        response.status (400).send (
            {
                message: "Request failed. Empty."
            }
        );
        return;
    }
    const newUser = {
    idUser: request.body.idUser,
     username: request.body.username,
        published_date: request.body.published_date
    }
    dbManager.User.create(newUser).then(
        data => {
            response.send(data)
        }
    ).catch(
        error => {
            console.log(error.message)
            response.status(500).send(
                {
                    message: "Happen error :( !"
                }
            );
        }
    );
}

async function getAllUsers (req, res) {

    try {

        const users = await  dbManager.User.findAll();

        res.json (
            {
                data: users
            }
        );

    } catch (error) {
        res.status(500).send(
            {
                message: "Error Happen!:/ "
            }
        );
    }
}

async function findOneUserById(req, res) {
    try {
        const {
            idUser
        } = req.params;

        const userFound = await  dbManager.User.findOne(
            {
                where: {
                    idUser: idUser
                }
            }
        );

        res.json (userFound);

    } catch (error) {
        res.status(500).send(
            {
                message: "Error Happen!:/ "
            }
        );
    }

}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.findOneUserById = findOneUserById;

