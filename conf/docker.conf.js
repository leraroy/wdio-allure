const { config } = require("../wdio.conf")

const dockerConfig = {
    ...config,
    services: ['docker'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true

        },
        {
            maxInstances: 1,
            browserName: 'firefox',
            acceptInsecureCerts: true

        },
        {
            maxInstances: 1,
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