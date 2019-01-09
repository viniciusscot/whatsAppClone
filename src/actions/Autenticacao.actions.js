import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";
import {
  MODIFICA_SENHA,
  MODIFICA_NOME,
  MODIFICA_EMAIL,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO
} from "./types";

export const modificaEmail = payload => {
  return {
    type: MODIFICA_EMAIL,
    payload
  };
};

export const modificaSenha = payload => {
  return {
    type: MODIFICA_SENHA,
    payload
  };
};

export const modificaNome = payload => {
  return {
    type: MODIFICA_NOME,
    payload
  };
};

export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {
    dispatch({ type: CADASTRO_EM_ANDAMENTO });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(user => {
        let emailB64 = b64.encode(email);

        firebase
          .database()
          .ref(`/contatos/${emailB64}`)
          .push({ nome })
          .then(resp => {
            console.log(resp);
            cadastroUsuarioSucesso(dispatch);
          })
          .catch(err => console.log(err));
      })
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  };
};

const cadastroUsuarioSucesso = dispatch => {
  dispatch({ type: CADASTRO_USUARIO_SUCESSO });

  Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
};

export const autenticarUsuario = ({ email, senha }) => {
  return dispatch => {
    dispatch({ type: LOGIN_EM_ANDAMENTO });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(value => loginUsuarioSucesso(dispatch))
      .catch(erro => loginUsuarioErro(erro, dispatch));
  };
};

const loginUsuarioSucesso = dispatch => {
  dispatch({ type: LOGIN_USUARIO_SUCESSO });
  Actions.principal();
};

const loginUsuarioErro = (erro, dispatch) => {
  dispatch({ type: LOGIN_USUARIO_ERRO, payload: erro.message });
};
