exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
      table.increments('id').primary(); // id com incremento automático
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
  };
  