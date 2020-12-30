import DB from '../../../database/initial_data.json';

const allFuentes = async(req, res) => {
    const db = await DB;
    const length = db.length;

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({length, data: db}));
};

export default allFuentes;