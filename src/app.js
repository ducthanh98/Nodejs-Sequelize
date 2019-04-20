import express from 'express';
import logger from 'morgan';
import db from "./config/database";
import cors from 'cors';
import { router } from './resources/index';
const app = express();


db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(e => console.log(e));

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('', (req, res) => {
    res.json({ 'message': 'Welcome' });
});
app.use('/api/v1', router);

app.listen(3000, () => {
    console.log('App is working now');
});