import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

const formLogin = props => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} >
                <Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
            </View>
            <View style={styles.box2}>
                <TextInput value={props.email} style={styles.textInput} placeholder='E-mail' />
                <TextInput value={props.senha} style={styles.textInput} placeholder='Senha' />
                <TouchableHighlight onPress={() => Actions.formCadastro()} >
                    <Text style={{ fontSize: 20 }}>
                        {'Ainda não tem cadastro? Cadastre-se'}
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.box2}>
                <Button title="acessar" color='#115E54' onPress={() => false}></Button>
            </View>
        </View>
    );
}

const mapStateToProsps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProsps, null)(formLogin);

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
