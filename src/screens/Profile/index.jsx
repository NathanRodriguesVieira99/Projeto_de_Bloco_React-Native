import React, { useState, useEffect } from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet } from 'react-native';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const fakeEmail = 'alunoinfnet@al.infnet.edu.br';

  const favoriteMovies = [
    { id: 1, title: 'Avatar', image: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg' },
    { id: 2, title: 'Pirates of Caribben', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7989366_p_v8_ab.jpg' },
    { id: 3, title: 'Avengers', image: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg' },
    { id: 4, title: 'Joker', image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
  ];

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

  const selectProfileImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
  
    try {
      const result = await launchImageLibrary(options);
      if (result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
      } else if (result.errorMessage) {
        console.error('Erro ao selecionar a imagem:', result.errorMessage);
      } else {
        console.log('Seleção de imagem cancelada pelo usuário.');
      }
    } catch (error) {
      console.error('Erro ao abrir a galeria:', error);
    }
  };

  const renderMovie = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={{ uri: item.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileImageContainer} onPress={selectProfileImage}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require('../../assets/profile/placeholder.png')
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.nome}>Bem-vindo, {username}</Text>
      <Text style={styles.email}>{fakeEmail}</Text>

      <View style={styles.favoritesSection}>
        <Text style={styles.favoritesTitle}>Filmes Favoritos</Text>
        <FlatList
          data={favoriteMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderMovie}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.favoritesList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    borderRadius: 150,
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  email: {
    fontSize: 20,
    color: '#bbb',
    marginBottom: 20,
  },
  favoritesSection: {
    width: '100%',
    marginTop: 20,
  },
  favoritesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'left',
    paddingLeft: 10,
  },
  favoritesList: {
    paddingHorizontal: 10,
  },
  movieCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    maxWidth: 120,
  },
});
