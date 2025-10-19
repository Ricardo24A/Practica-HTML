# Usa una imagen base oficial de Nginx
FROM nginx:alpine

# Copia los archivos de tu proyecto al contenedor
COPY . /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80