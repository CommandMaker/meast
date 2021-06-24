FROM ubuntu:18.04

RUN mkdir /var/www

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x -o /tmp/nodesource_setup.sh
RUN chmod +x /tmp/nodesource_setup.sh && /tmp/nodesource_setup.sh

RUN apt-get update && apt-get install -y nodejs

RUN npm i -g yarn