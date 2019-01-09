import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import { modificaAdicionaContatoEmail } from "../actions/App.actions";

class AdicionarContato extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TextInput
            placeholder="E-mail"
            style={{ fontSize: 20, height: 45 }}
            onChangeText={texto =>
              this.props.modificaAdicionaContatoEmail(texto)
            }
            value={this.props.adciona_contato_email}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Adicionar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  adciona_contato_email: state.AppReducer.adciona_contato_email
});

export default connect(
  mapStateToProps,
  { modificaAdicionaContatoEmail }
)(AdicionarContato);
