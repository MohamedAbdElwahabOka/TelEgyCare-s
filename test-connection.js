// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   database: process.env.DATABASE_NAME,
//   user: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   ssl: false  // عطل SSL
// });

// pool.query('SELECT NOW()', (err, res) => {
//   if (err) return console.error('❌ Connection failed:', err.message);
//   console.log('✅ Connected to Supabase:', res.rows[0]);
//   pool.end();
// });
