FROM node:16.15
WORKDIR /server
COPY package.json /server
RUN yarn
COPY . /server
CMD yarn start
EXPOSE 5000
