import { useFonts } from '@expo-google-fonts/montserrat';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  return fontsLoaded;
};
