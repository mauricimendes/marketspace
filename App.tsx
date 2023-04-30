import { StatusBar, Text } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

import { Loading } from '@components/Loading'
import { SignIn } from '@screens/SignIn'

import { THEME } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}