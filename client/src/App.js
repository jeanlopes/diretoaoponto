import React from 'react';
import { Route } from 'react-router';
import Layout from './components/shared/layout';
import Home from './components/home/Home';
import Funcionario from './components/funcionario/Funcionario';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/funcionario' component={Funcionario} />
  </Layout>
);

