import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input, Check } from '@rocketseat/unform';
import logo from '~/assets/images/logo.jpeg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required('*O nome é obrigatório'),
  email: Yup.string()
    .email('*Insira um e-mail válido')
    .required('*O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('*A senha é obrigatória'),
});

function Cadastro() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password, profissional }) {
    dispatch(signUpRequest(nome, email, password, profissional));
    console.tron.log(profissional);
  }

  return (
    <>
      <img
        src={logo}
        alt="Luciana Teperino Arquitetura"
        style={{ width: 100, height: 100 }}
      />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" type="text" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <div>
          <Check name="profissional" label="Sou profissional" />
        </div>
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho cadastro</Link>
      </Form>
    </>
  );
}

export default Cadastro;
