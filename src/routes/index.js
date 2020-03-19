import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../Views/Login';
import Cadastro from '../Views/Cadastro';
import Etapas from '../Views/Etapas';
import Images from '../Views/Images';
import Orcamentos from '../Views/Orcamentos';
import Pagamentos from '../Views/Pagamentos';
import Main from '../Views/Main';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/etapas" component={Etapas} isPrivate />
      <Route path="/imagens" component={Images} isPrivate />
      <Route path="/orcamentos" component={Orcamentos} isPrivate />
      <Route path="/pagamentos" component={Pagamentos} isPrivate />
      <Route path="/home" component={Main} isPrivate />
      <Route path="/" component={() => <h1>404 - Not Found!</h1>} />
    </Switch>
  );
}

export default Routes;
