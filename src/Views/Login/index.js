import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.jpeg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('*Insira um e-mail válido')
    .required('*O e-mail é obrigatório'),
  password: Yup.string().required('*A senha é obrigatória'),
});

function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img
        src={logo}
        alt="Luciana Teperino Arquitetura"
        style={{ width: 100, height: 100 }}
      />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Fazer Login</button>
        <Link to="/cadastro">Crie sua conta</Link>
      </Form>
    </>
  );
}

export default Login;
