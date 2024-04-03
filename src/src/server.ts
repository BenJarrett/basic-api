import http from 'http';
import express from 'express';
import './config/logging';
import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    logging.info('-----------------------------------------------');
    logging.info('Initializing API');
    logging.info('-----------------------------------------------');
    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.info('-----------------------------------------------');
    // Creating our first two pieces of middleware
    // Middleware in Express can either do something to the actual request or end it depending on the conditions that are met
    logging.info('Logging and Configuration');
    logging.info('-----------------------------------------------');
    application.use(loggingHandler);
    application.use(corsHandler);

    // Defining our Controller Routing //
    logging.info('-----------------------------------------------');
    logging.info('Define Controller Routing');
    logging.info('-----------------------------------------------');
    // just adding a health check for now //
    // adding some json on a successful request to check that our API is running correctly from a browser or a tool like Postman //
    application.get('/main/healthcheck', (req, res, next) => {
        return res.status(200).json({ hello: 'world' });
    });

    // Defining our Error Routing //
    logging.info('-----------------------------------------------');
    logging.info('Define Error Routing');
    logging.info('-----------------------------------------------');
    // creating an error route //
    // adding some json on a successful request to check that our API is running correctly from a browser or a tool like Postman //
    application.get('/main/healthcheck', (req, res, next) => {
        return res.status(200).json({ hello: 'world' });
    });
};
