FROM httpd:latest
COPY rp.conf /usr/local/apache2/conf/conf.d/rp.conf
RUN echo "Include conf/conf.d/*.conf" >> /usr/local/apache2/conf/httpd.conf
EXPOSE 443
