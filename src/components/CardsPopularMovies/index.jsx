import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import fetchPopularMovies, { IMAGE_BASE_URL } from '../../api/apiServices';
import { styles } from './styles'

export const CardsPopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          style={styles.poster}
          source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderMovie}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );


}