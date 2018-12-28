import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario
} from "../actions/Autenticacao.actions";

class formLogin extends Component {
  _autenticarUsuario = () => {
    const { email, senha } = this.props;

    this.props.autenticarUsuario({ email, senha });
  };

  render() {
    return (
      <ImageBackground
        style={{ flex: 1, width: null }}
        source={require("../imgs/bg.png")}
      >
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={{ fontSize: 25, color: "#fff" }}>WhatsApp Clone</Text>
          </View>
          <View style={styles.box2}>
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
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, color: "#fff" }}>
                {"Ainda não tem cadastro? "}
              </Text>
              <TouchableHighlight onPress={() => Actions.formCadastro()}>
                <Text style={{ fontSize: 20, color: "#fff" }}>
                  {"Cadastre-se"}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.box2}>
            <Button
              title="acessar"
              color="#115E54"
              onPress={() => this._autenticarUsuario()}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProsps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

export default connect(
  mapStateToProsps,
  { modificaEmail, modificaSenha, autenticarUsuario }
)(formLogin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box2: {
    flex: 2
  },
  textInput: {
    fontSize: 20,
    height: 45
  }
});
