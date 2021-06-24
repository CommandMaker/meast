FROM debian:buster-slim

RUN apt-get update && apt-get install -y apache2
RUN a2enmod proxy_fcgi rewrite

COPY apache2.conf /etc/apache2/apache2.conf

CMD /usr/sbin/apache2ctl -D FOREGROUND