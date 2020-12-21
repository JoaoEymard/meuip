FROM node:15.0.1-alpine3.10

# application
RUN mkdir -p /home/node/app
ADD . /home/node/app
WORKDIR /home/node/app

# setup project
RUN npm install --only=prod --quiet

# command
CMD [ "npm", "start" ]
