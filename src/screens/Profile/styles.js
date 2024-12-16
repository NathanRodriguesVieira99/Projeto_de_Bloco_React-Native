import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: currentTheme.background,
    flex: 1
  },
  nome: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium',
    // color: currentTheme.text
  },
  email: {
    borderWidth: 1,
    fontFamily: 'Montserrat_700Bold',
    padding: 5,
    top: 10,
    borderRadius: 10,
    backgroundColor: '#fff'
  }
})