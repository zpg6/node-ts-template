import { Express } from 'express';
import express from 'express';
import { UUID } from '../foundation/uuid';
const path = require('path')

export class MyRouter {

    static addRoutes(app: Express) {
        
        app.get('/', (req,res) => {
            res.send(UUID.create())
        })
        
        app.use('/running', express.static(path.join(__dirname + '/static/html/index.html')))
        
        app.listen(9000, ()=> {
            console.log('\nServer running @ http://localhost:'+9000)
        })
    }

}