import Model from './employees.model';
export default {
    getAll(req, res) {
        Model.findAll()
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err));
    },
    create(req, res) {
        const { name, dob, sex, address } = req.body;
        Model.create({
            name, dob, sex, address
        }).then(result => res.status(200).json(result))
        .catch(err=> res.status(500).json(err));
    }
}