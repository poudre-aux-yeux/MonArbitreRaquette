FROM node:9.11.1-alpine as build
LABEL maintainer="Thomas Sauvajon <thomas.sauvajon.dev@gmail.com>"
WORKDIR /tmp/ref
COPY . .
RUN yarn
RUN yarn build

FROM nginx:1.13.12-alpine
COPY --from=build /tmp/ref/dist /usr/share/nginx/html

EXPOSE 80