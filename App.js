import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Loading } from './src/components/Loading/Index';
import Routes from './src/routes';
import { useCustomFonts } from './src/styles/fonts/fonts'

export default function App() {

  const fontesLoaded = useCustomFonts()

  if (!fontesLoaded) {
    return <Loading />
  }

  return (
    <Routes />
  );
}

