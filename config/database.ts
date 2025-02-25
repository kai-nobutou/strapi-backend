export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: false, // SSLを無効にする
    },
    pool: { min: 2, max: 10 },
  },
});