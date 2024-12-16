import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainers: {
    marginBottom: 2,
  },
  inputsLabel: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    // color: currentTheme.text
  },
  input: {
    // borderColor: currentTheme.primary,
    borderWidth: 1,
    width: 300,
    padding: 10,
    height: 40,
    marginTop: 5,
    borderRadius: 40
  },
  forgotPassword: {
    // color: currentTheme.secondary,
    fontSize: 14,
    marginTop: 8,
    marginLeft: 195
  },
  loginBtn: {
    marginTop: 20,
    border: 1,
    width: 327,
    height: 78,
    borderRadius: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: currentTheme.text,
    // backgroundColor: currentTheme.background
  },
  btnText: {
    fontFamily: 'Montserrat_700Bold',
    // color: currentTheme.text,
    fontSize: 32
  }

})