FROM node:alpine

RUN mkdir client

WORKDIR /front-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]