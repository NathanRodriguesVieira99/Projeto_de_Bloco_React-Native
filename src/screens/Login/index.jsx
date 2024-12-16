import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles'

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation()

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
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.inputsContainers}>
            <Text style={styles.inputsLabel}>Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder='usuário'
              onChangeText={setUserName}
              value={username}
            />
          </View>
          <View style={styles.inputsContainers}>
            <Text style={styles.inputsLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder='senha'
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity >
            <Text style={styles.forgotPassword}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginBtn}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}