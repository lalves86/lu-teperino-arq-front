import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Etapas from './Etapas';
import Images from './Images';
import Orcamentos from './Orcamentos';
import Pagamentos from './Pagamentos';
import Main from './Main';

function Routes() {
  return (
    <Router>
      <nav className="navegacao navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Voltar <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/etapas">
                Etapas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/imagens">
                Imagens
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orcamentos">
                Orçamentos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pagamentos">
                Pagamentos
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand" to="/home">
          HOME
        </Link>
      </nav>

      <Switch>
        <Route path="/etapas">
          <Etapas />
        </Route>
        <Route path="/imagens">
          <Images />
        </Route>
        <Route path="/orcamentos">
          <Orcamentos />
        </Route>
        <Route path="/pagamentos">
          <Pagamentos />
        </Route>
        <Route path="/home">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
