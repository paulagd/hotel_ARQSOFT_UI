FROM nginx:1.13
COPY /build /usr/share/nginx/html/hotel
RUN sh -c 'touch /usr/share/nginx/html/hotel/index.html'
COPY hotel-nginx.conf /etc/nginx/conf.d