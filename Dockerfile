
FROM node:12-alpine AS builder
RUN apk --no-cache add curl
RUN curl -s https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-268.0.0-linux-x86_64.tar.gz | tar xz
WORKDIR /web
COPY package*.json /web/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /web/build /usr/share/nginx/html