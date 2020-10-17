import React from 'react';
import { useFonts } from 'expo-font'
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    f600: Nunito_600SemiBold,
    f700: Nunito_700Bold,
    f800: Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Routes />
  );
}


