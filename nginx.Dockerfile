FROM node:11-alpine as builder

WORKDIR /client
COPY ./client/ ./

RUN npm install
RUN npm run build


FROM nginx:1.15.9-alpine

COPY --from=builder /client/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/

VOLUME /usr/share/nginx/animalsPhotos/

