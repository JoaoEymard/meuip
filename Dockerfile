FROM node:15.0.1-alpine3.10

# application
RUN mkdir -p /home/node/app
ADD . /home/node/app
WORKDIR /home/node/app
RUN rm -rf node_modules

# setup project
RUN npm install -s

# enviroment
ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL info

# export port to node
EXPOSE 3000

# command
CMD [ "npm", "start" ]