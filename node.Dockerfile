FROM node:11-alpine

WORKDIR /app/server

COPY ./server/ ./

RUN npm install

VOLUME /app/server/animalsPhotos/

EXPOSE 8080

CMD ["node", "index.js"]