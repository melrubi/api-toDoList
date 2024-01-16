import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import pkg from '../package.json' assert {type: 'json'}
import tasksRouters from '../routers/tasksRouters.js'

const app = express();

app.set("pkg", pkg);
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit:'50mb',
    extended: true
}));

app.get('/', (req,res) => {
    res.json({
        name:app.get('pkg').name
    })
});

app.use('/tasks', tasksRouters);

export default app;