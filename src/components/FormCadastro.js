import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";

import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from "../actions/Autenticacao.actions";

class formCadastro extends Component {
  _cadastraUsuario = () => {
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({ nome, email, senha });
  };

  render() {
    return (
      <ImageBackground
        style={{ flex: 1, width: null }}
        source={require("../imgs/bg.png")}
      >
        <View style={styles.container}>
          <View style={styles.box1}>
            <TextInput
              value={this.props.nome}
              style={styles.textInput}
              placeholder="Nome"
              placeholderTextColor="#fff"
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              style={styles.textInput}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              style={styles.textInput}
              placeholder="Senha"
              placeholderTextColor="#fff"
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
            <Text style={{ color: "#ff0000", fontSize: 18 }}>
              {this.props.erroCadastro}
            </Text>
          </View>
          <View style={styles.box2}>
            <Button
              title="Cadastrar"
              color="#115E54"
              onPress={() => this._cadastraUsuario()}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroCadastro: state.AutenticacaoReducer.erroCadastro
});

export default connect(
  mapStateToProps,
  { modificaEmail, modificaSenha, modificaNome, cadastraUsuario }
)(formCadastro);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  box1: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  box2: {
    flex: 1
  },
  textInput: {
    fontSize: 20,
    height: 45
  }
});
