import {Router} from 'express'
import bodyParser from 'body-parser'

const router = Router();
const jsonParser = bodyParser.json();

router.get('/test', function(req, res, next) {
    console.log(1, 'request');
    next();
    console.log(1, 'response');
},
function(req, res, next) {
    console.log(2, 'request');
    next();
    console.log(2, 'response');
},
function(req, res, next) {
    console.log(3, 'request');
    next();
    console.log(3, 'response');
},)

