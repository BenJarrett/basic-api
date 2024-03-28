import http from 'http';
import express from 'express';
import './config/logging';
import { loggingHandler } from './middleware/loggingHandler';

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
};
