import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: '1.0.0',
        title: 'SportAnalytics API',
        description: 'Documentation description'
    },
    host: 'localhost:3000',
    servers: [
        {
            url: '',
            description: '',
        }
    ],
    tags: [
        {
            name: '',
            description: '',
        }
    ],
    components: {}
};

const outputFile = '../swagger-output.json';
const routes = [ './routes/index.js' ];

// Just generate swagger documentation
// swaggerAutogen(outputFile, routes, doc);

// Generate swagger documentation and run application
swaggerAutogen()(outputFile, routes, doc).then(async() => {
    await import('./index.js');
});