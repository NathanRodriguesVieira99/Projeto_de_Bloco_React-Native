import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import fetchPopularMovies, { IMAGE_BASE_URL } from '../../api/apiServices';

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
      <SafeAreaView style={styles.card}>
        <Image
          style={styles.poster}
          source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Filmes Populares</Text>
      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderMovie}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  loading: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  carouselContainer: {
    alignItems: 'center',
  },
  card: {
    marginRight: 10,
    alignItems: 'center',
  },
  poster: {
    width: Dimensions.get('window').width * 0.6, 
    height: Dimensions.get('window').width * 0.9, 
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: '#fff', 
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
