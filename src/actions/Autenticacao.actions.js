import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";

export const modificaEmail = payload => {
  return {
    type: "modifica_email",
    payload
  };
};

export const modificaSenha = payload => {
  return {
    type: "modifica_senha",
    payload
  };
};

export const modificaNome = payload => {
  return {
    type: "modifica_nome",
    payload
  };
};

export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {
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
  dispatch({ type: "cadastro_usuario_sucesso" });

  Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: "cadastro_usuario_erro", payload: erro.message });
};

export const autenticarUsuario = user => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(...user)
      .then()
      .catch();
  };
  dispatch({ type: "teste" });
};
