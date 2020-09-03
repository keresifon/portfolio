FROM node:12.16.3
WORKDIR /
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]