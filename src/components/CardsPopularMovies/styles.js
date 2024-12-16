import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
  },
  loading: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});