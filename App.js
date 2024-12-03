import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Loading } from './src/components/Loading/Index';

export default function App() {

  const [fontesLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  })

  if (!fontesLoaded) {
    return <Loading />
  }

  return (
    <View>
      <Text>Projeto de bloco RN</Text>
    
    </View>
  );
}

