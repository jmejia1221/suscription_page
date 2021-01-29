import DB from '../../../database/initial_data.json';

const porjects = async(req, res) => {
    const db = await DB;
    const length = db.length;

    const id = req.query.id;

    const dbById = db.filter(item => {
        return item.id === id
    });

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({length, data: dbById}));
};

export default porjects;