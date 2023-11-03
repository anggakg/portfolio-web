FROM node:current-alpine3.10 as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn run build:css
RUN yarn run build

FROM nginx:1.19.8-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
