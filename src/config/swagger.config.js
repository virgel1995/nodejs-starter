export default {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodejs-Starter  API',
      version: '1.0.0',
      description: 'The API documentation of a starter project for quickly building RESTful APIs using Node.js, Express, and Mongoose.',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'virus24',
        url: 'https://github.com/virgel199',
        email: 'kazouya25@gmail.com',
      },
    },
    basePath: '/',
    servers: [
      {
        url: 'http://localhost:3000/',
      },
    ],
  },
  tags: [
    {
      "name": "User",
      "description": "API for users"
    }
  ],
  apis: [
    "src/models/*.js",
    "src/utils/helpers/*.js",
    "src/api/controllers/user/*.js",
    "src/api/controllers/user/edit/*.js",
    "src/api/controllers/user/auth/*.js",
	"src/api/controllers/user/social/*.js"	
  ]
};