import express from 'express';
import { MyRouter } from './router';

export class App {
    
    private app;

    constructor() {

        this.app = express();
        MyRouter.addRoutes(this.app)
        
    }

}