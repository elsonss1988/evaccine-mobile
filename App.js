import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import AppDataService from './services/AppDataService';

export default function App() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('0');
  const [dataNascimento, setDataNascimento] = useState('');
  const [grupo, setGrupo] = useState(null);

  const handleAdd = event => {
    const pessoa = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      idade: idade,
      dataNascimento: dataNascimento,
      grupo: {
        codigo: grupo,
      },
    };
    AppDataService.cadastrarPessoa(pessoa);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Cadastro Evaccine</Text>
      <TextInput
        onChangeText={setNome}
        value={nome}
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#fff"
      />
      <TextInput
        onChangeText={setCpf}
        value={cpf}
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#fff"
      />
      <TextInput
        onChangeText={setTelefone}
        value={telefone}
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#fff"
      />
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        placeholder="e-mail"
        placeholderTextColor="#fff"
      />
      <TextInput
        onChangeText={setIdade}
        value={idade}
        style={styles.input}
        placeholder="Idade"
        placeholderTextColor="#fff"
      />
      <TextInput
        onChangeText={setDataNascimento}
        value={dataNascimento}
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="#fff"
      />
      <TextInput
        onChangeText={setGrupo}
        value={grupo}
        style={styles.input}
        placeholder="Grupo"
        placeholderTextColor="#fff"
      />
      <Button onPress={handleAdd} title="CADASTRAR" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0D458D',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#0D458D',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 8,
  },
});
