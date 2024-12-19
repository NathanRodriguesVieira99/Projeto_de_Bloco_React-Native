import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    try {
      if (username && password) {
        setError('');

        await AsyncStorage.setItem('@username', username);

        navigation.replace('Profile');
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Algo deu errado, tente novamente');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/profile/MovieFlix.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <SafeAreaView>
        <SafeAreaView style={styles.inputsContainers}>
          <Text style={styles.inputsLabel}>Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#aaa"
            onChangeText={setUserName}
            value={username}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.inputsContainers}>
          <Text style={styles.inputsLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci a senha</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  inputsContainers: {
    marginBottom: 20,
  },
  inputsLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 'bold',
    borderLeftWidth: 4,
    borderLeftColor: 'red',
    paddingLeft: 8,
  },
  input: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  forgotPassword: {
    color: 'white',
    textAlign: 'right',
    marginTop: 10,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginBtn: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});