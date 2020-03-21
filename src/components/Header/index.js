import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo-header.jpeg';
import profile from '~/assets/images/babyyoda.jpg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/Home">
            <img src={logo} alt="Logo" style={{ width: 130, height: 30 }} />
          </Link>
          <Link to="/etapas">Etapas</Link>
          <Link to="/orcamentos">Orçamentos</Link>
          <Link to="/pagamentos">Pagamentos</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Luciana Teperino</strong>
              <Link to="/perfil">Meu Perfil</Link>
            </div>
            <img src={profile} alt="avatar" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
