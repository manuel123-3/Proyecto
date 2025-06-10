# Backend
FROM node:18 AS backend

WORKDIR /app

# Copiar solo los archivos de configuración del backend primero
COPY backend/package*.json ./backend/
WORKDIR /app/backend

# Instalar dependencias del backend
RUN npm install

# Copiar el resto del código del backend
COPY backend ./backend

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "server.js"]


