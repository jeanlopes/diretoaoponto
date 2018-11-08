'use strict'

const Funcionario = use('App/Models/Funcionario');

class FuncionarioController {
    
    async index({view}) {

        let funcs = await Funcionario.all();

        return view.render('funcionario.index', {funcionarios: funcs.toJSON()});
    }
}

module.exports = FuncionarioController
