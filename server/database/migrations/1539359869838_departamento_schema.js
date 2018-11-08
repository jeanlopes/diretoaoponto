'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartamentoSchema extends Schema {
  up () {
    this.create('departamento', (table) => {
      table.increments('departamento_id');
      table.string('nome', 50);
      table.string('ramal', 10);
    })
  }

  down () {
    this.drop('departamento')
  }
}

module.exports = DepartamentoSchema
