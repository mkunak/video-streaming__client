FROM node:alpine

RUN npm install -g @angular/cli

WORKDIR /application

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "ng", "serve", "--host", "0.0.0.0" ]
