module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['https://strapi-backend-0fd2.onrender.com', 'https://your-frontend-app.onrender.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      credentials: true,
    },
  },
};