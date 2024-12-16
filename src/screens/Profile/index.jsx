import { Image, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
 import ProfilePic from '../../assets/profile/kkkk.jpg'
import { styles } from "./styles";


export default function Profile() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const UserName = await AsyncStorage.getItem('@username');
        if (UserName !== null) {
          setUsername(UserName);
        } else {
          setUsername('Usuário não cadastrado');
        }
      } catch (error) {
        console.error('Erro ao buscar usuário', error);
      }
    };

    getUser();
  }, []);


  const fakeEmail = 'gorila_da_silva@gmail.com';

  return (
    <View style={styles.container}>
      <Image source={ProfilePic} style={{
        borderRadius: 50,
        width: 110,
        height: 110
      }} />
      <Text style={styles.nome}>Bem-vindo {username}</Text>
      <Text style={styles.email}>Seu email é: {fakeEmail}</Text>
    </View>
  );
}
