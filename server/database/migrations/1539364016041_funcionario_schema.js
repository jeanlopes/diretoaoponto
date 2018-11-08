'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionarioSchema extends Schema {


  up () {
    this.create('fucionario', (table) => {
      table.increments('funcionario_id');
      table.date('admissao');
      table.date('demissao');
      table.date('nascimento');
      table.string('cargo', 50);
      table.enu('sexo', ['masculino', 'feminino']);
      table.integer('pis');
      table.integer('rg');
      table.integer('cpf');
      table.integer('carga_horaria_id').unsigned().notNullable();
      table.foreign('carga_horaria_id').references('carga_horaria.carga_horaria_id');
      table.timestamps();

      table.integer('departamento_id').unsigned().notNullable();
      table.foreign('departamento_id').references('departamento.departamento_id');

    })
  }

  down () {
    this.drop('funcionario')
  }
}

module.exports = FuncionarioSchema
