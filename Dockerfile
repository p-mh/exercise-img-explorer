FROM node:11-alpine

#CLIENT

WORKDIR /app

COPY ./client/ ./client/

WORKDIR /app/client

RUN npm install
RUN npm run build

#SERVER

WORKDIR /app

COPY ./server/ ./server/

WORKDIR /app/server

RUN npm install

VOLUME /app/server/images/

EXPOSE 8080

CMD ["node", "index.js"]