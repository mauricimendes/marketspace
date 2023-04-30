import { Image, Text, Center, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import logoPNG from '@assets/logo.png'
import MarketspaceSVG from '@assets/marketspace.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { AuthNavigationRouteProps } from '@routes/auth.routes'

export function SignIn() {

  const navigation = useNavigation<AuthNavigationRouteProps>()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Center
        borderBottomLeftRadius={24}
        borderBottomRightRadius={24}
        pt={24}
        pb={16}
        px={10}
        bgColor='gray.600'
        w='full'
      >
        <Image
          source={logoPNG}
          alt='Logo Marketspace'
          mb={5}
        />

        <MarketspaceSVG />

        <Text
          fontFamily='body'
          color='gray.300'
          fontSize='sm'
          mb={16}
        >
          Seu espaço de compra e venda
        </Text>


        <Text
          fontFamily='body'
          color='gray.200'
          fontSize='sm'
          mb={4}
        >
          Acesse sua conta
        </Text>

        <Input
          placeholder='E-mail'
        />

        <Input
          placeholder='Senha'
          secureTextEntry={true}
        />

        <Button
          title='Entrar'
          mt={4}
          w='full'
          onPress={() => navigation.navigate('home')}
        />
      </Center>
      <Center px={10}>
        <Text mt={12} mb={4}>
          Ainda não tem acesso?
        </Text>

        <Button
          title='Criar uma conta'
          color='gray'
          mb={12}
          w='full'
          onPress={() => navigation.navigate('signUp')}
        />
      </Center>
    </ScrollView>
  )
}