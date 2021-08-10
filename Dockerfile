FROM node:lts-alpine3.14 AS builder
WORKDIR /test-server
COPY main.js .
COPY package*.json ./
COPY config/* ./config/
COPY route/* ./route/
RUN npm install

EXPOSE 9000
ENTRYPOINT ["npm", "run", "start"]
