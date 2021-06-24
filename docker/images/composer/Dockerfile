FROM php:latest

RUN pecl install xdebug apcu opcache && docker-php-ext-enable xdebug apcu opcache

RUN mkdir /app
WORKDIR /app

RUN curl "https://raw.githubusercontent.com/composer/getcomposer.org/76a7060ccb93902cd7576b67264ad91c8a2700e2/web/installer" | php --
RUN ln -sf /app/composer.phar /usr/bin/composer

WORKDIR /usr/src/myapp