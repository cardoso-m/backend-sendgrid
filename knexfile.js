require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: './src/config/database/migrations',
        tableName: 'knex_migrations'
    }
}
,
    staging: {
        client: 'postgresql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './src/config/database/migrations',  // Especifique o diretório aqui também, se necessário
            tableName: 'knex_migrations'
        }
    },
};