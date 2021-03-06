FROM node:15.0.1-alpine3.10

# Create app directory
WORKDIR /usr/src/project

# Install app dependencies
COPY package.json /usr/src/project

RUN npm install --only=prod --quiet

ENTRYPOINT npm start