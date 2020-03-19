import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.jpeg';

function Login() {
  return (
    <>
      <img
        src={logo}
        alt="Luciana Teperino Arquitetura"
        style={{ width: 100, height: 100 }}
      />
      <form method="post">
        <input type="text" placeholder="Seu nome completo" />
        <input type="text" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <input type="text" placeholder="Documento de identificação" />
        <input type="phone" placeholder="Telefone de contato" />
        <span>Endereço</span>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="Estado" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho cadastro</Link>
      </form>
    </>
  );
}

export default Login;
