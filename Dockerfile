# Base da imagem
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start"]
