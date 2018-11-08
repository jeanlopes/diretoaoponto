'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurnoSchema extends Schema {
  up () {
    this.create('turno', (table) => {
      table.increments('turno_id');
      table.enu('turno', ['manha', 'tarde', 'noite']);

      table.time('segunda_entrada');
      table.time('segunda_saida');
      table.time('terca_entrada');
      table.time('terca_saida');
      table.time('quarta_entrada');
      table.time('quarta_saida');
      table.time('quinta_entrada');
      table.time('quinta_saida');
      table.time('sexta_entrada');
      table.time('sexta_saida');
      table.time('sabado_entrada');
      table.time('sabado_saida');
      table.time('domingo_entrada');
      table.time('domingo_saida');
      
      table.integer('carga_horaria_id').unsigned().notNullable();
      table
        .foreign('carga_horaria_id')
        .references('carga_horaria.carga_horaria_id');
    })
  }

  down () {
    this.drop('turno');
  }
}

module.exports = TurnoSchema
