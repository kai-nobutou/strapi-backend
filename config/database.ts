export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: { rejectUnauthorized: false }, // SSL必須
    },
    pool: { min: 2, max: 10 },
  },
});