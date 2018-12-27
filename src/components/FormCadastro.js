import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'


const formCadastro = props => (
    <View style={styles.container}>
        <View style={styles.box1}>
            <TextInput value={props.nome} style={styles.textInput} placeholder='Nome' />
            <TextInput value={props.email} style={styles.textInput} placeholder='E-mail' />
            <TextInput value={props.senha} style={styles.textInput} placeholder='Senha' />
        </View>
        <View style={styles.box2}>
            <Button title="Cadastrar" color='#115E54' onPress={() => false}></Button>
        </View>
    </View>
)

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, null)(formCadastro);

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
