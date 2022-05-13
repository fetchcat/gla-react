# gla-react

Grocery List App (MERN Stack)

This is a Grocery List Application using the MongoDB Database, Express, React and Node.js.

## Notes

Be sure to create a backend/.env file set the following Environment Variables:

1. SERVER (MongoDB connection string)
2. DB (MongoDB database name)

## Scripts

### Frontend

Webpack Dev Server

> yarn serve

Production Build

> yarn build

### Backend

Run backend and webpack dev server (Dev Environment)

> yarn dev

### Deploy to GCP AppEngine

1. Create a backend/env.yaml file and add

> env_variables:

> SERVER: "mongodb-server-string"

> DB: "mongodb-database"

2. Deploy App

> cd frontend && gcloud app deploy

> cd backend && gcloud app deploy api.yaml

> gcloud app deploy dispatch.yaml

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
