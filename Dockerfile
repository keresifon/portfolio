
FROM node:12-alpine AS builder
WORKDIR /
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17
WORKDIR /usr/share/nginx/html  
RUN rm -rf ./*
COPY --from=builder /build /usr/share/nginx/html  