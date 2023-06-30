FROM node:17

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .
#se cambio el puerto por el servidor
EXPOSE 8080
CMD ["node","src/index.js"]