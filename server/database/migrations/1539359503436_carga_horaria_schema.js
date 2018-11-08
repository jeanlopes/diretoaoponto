'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargaHorariaSchema extends Schema {
  up () {
    this.create('carga_horaria', (table) => {
      table.increments('carga_horaria_id');
      table.string('descricao').notNullable();
      table.integer('tempo_tolerancia').unsigned();
      table.integer('horas_semanais').unsigned();
      
    })
  }

  down () {
    this.drop('carga_horaria')
  }
}

module.exports = CargaHorariaSchema
