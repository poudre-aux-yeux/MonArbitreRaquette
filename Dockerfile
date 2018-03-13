FROM node:9.5.0

## COPY repository From To
COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.13.9-alpine


