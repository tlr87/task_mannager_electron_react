exports.up = function (knex, Promise) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary()
    table.string('Project_Name')
    table.string('Task')
    table.string('Colour')  
    table.string('Priority')
    table.string('Details')
    table.boolean('Compleated')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tasks')
}
