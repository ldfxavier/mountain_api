'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CotaSchema extends Schema {
  up () {
    this.create('cotas', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.decimal('value', 10, 2).notNullable()
      table.decimal('percent', 10, 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cotas')
  }
}

module.exports = CotaSchema
