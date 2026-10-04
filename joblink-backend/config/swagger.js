const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "JobLink API",
            version: "1.0.0",
            description: "Backend API documentation for the JobLink Job Portal System"
        },
        servers: [
            {
                url: "http://localhost:8080",
                description: "Local Development Server"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;