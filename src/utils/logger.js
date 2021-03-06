let winston = require("winston");
const { config } = require('../config/index');
let formatLog = config.dev ? "Console" : "File";
let objWinston = config.dev ? {level: 'silly'} : {
    filename: `${config.loggerFileFolder}/winston.log`,
    level: 'warn'
};

let winstonLogger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports[formatLog](objWinston)
    ]
});

module.exports = winstonLogger;