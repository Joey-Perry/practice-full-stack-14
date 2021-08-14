const db = (req) = req.app.get('db');

const getAll = (req, res) => {
    db(req).get_all()
        .then(data => res.status(200).send(data))
        .catch(err => console.log(`Error retrieving data: ${err}`));
};

const getOne = (req, res) => {
    const { id } = req.params;

    db(req).get_one(id)
        .then(data => res.status(200).send(data))
        .catch(err => console.log(`Error retrieving id ${id}: ${err}`));
};

const create = (req, res) => {
    const { body } = req.body;

    db(req).create(body)
        .then(data => res.status(200).send(data))
        .catch(err => console.log(`Error creating data: ${err}`));
};

const deleteOne = (req, res) => {
    const { id } = req.params;

    db(req).delete_one(id)
        .then(data => res.sendStatus(200))
        .catch(err => console.log(`Error deleting id ${id}: ${err}`));
};

const update = (req, res) => {
    const { body } = req.body;

    db(req).update(body)
        .then(data => res.status(200).send(data))
        .catch(err => console.log(`Error updating data: ${err}`));
};

module.exports = {
    getAll, getOne, create, deleteOne, update
};