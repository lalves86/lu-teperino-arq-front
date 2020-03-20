import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/home');
  } catch (err) {
    toast.error(
      'Ops! Não foi possível fazer o login! Verifique os dados e tente novamente!'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { nome, email, password, profissional } = payload;

    yield call(api.post, 'cadastro', {
      nome,
      email,
      password,
      profissional,
    });

    history.push('/');

    toast.success('Conta criada com sucesso!');
  } catch (err) {
    toast.error(
      'Ops! Não foi possível concluir o cadastro! Verifique os dados e tente novamente!'
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
