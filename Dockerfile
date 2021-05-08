FROM node:14-buster-slim

ENV HOST 0.0.0.0

COPY . /code

WORKDIR /code

RUN npm ci

RUN npm run build

CMD npm start

