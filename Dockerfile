# Backend
FROM node:18 AS backend
WORKDIR /app
COPY backend ./backend
WORKDIR /app/backend
RUN npm init -y && npm install express cors
EXPOSE 3000
CMD ["node", "server.js"]