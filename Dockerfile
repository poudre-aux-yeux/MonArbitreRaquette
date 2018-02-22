FROM node:9.5.0

COPY . .

RUN yarn
RUN yarn build


