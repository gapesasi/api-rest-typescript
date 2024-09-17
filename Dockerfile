FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

ENV NODE_ENV production
COPY . .
COPY .env .env

RUN npm run build

USER node

EXPOSE 3333

ENTRYPOINT ["./wait-db.sh"]