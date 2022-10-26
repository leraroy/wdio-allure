const { config } = require("../wdio.conf")

const dockerConfig = {
    ...config,
    services: ['docker'],
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true

        },
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true

        },
        {
            maxInstances: 5,
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true
        }
    ],
    logLevel: 'warn',
    port: 4444,
    hostname:'localhost',
    path:'/',
};
exports.config = dockerConfig;