FROM nginx:alpine

# Config Nginx customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Site estático
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost/health-frontend || exit 1