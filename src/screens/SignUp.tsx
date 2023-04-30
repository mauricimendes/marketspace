import { TouchableOpacity } from 'react-native'
import {
  Image,
  Text,
  Center,
  ScrollView,
  Box,
  Icon,
  Heading
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoPNG from '@assets/logo.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { AuthNavigationRouteProps } from '@routes/auth.routes'

export function SignUp() {
  const navigation = useNavigation<AuthNavigationRouteProps>()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Center
        borderBottomLeftRadius={24}
        borderBottomRightRadius={24}
        pt={10}
        pb={16}
        px={10}
        bgColor='gray.600'
        w='full'
      >
        <Image
          source={logoPNG}
          alt='Logo Marketspace'
          mb={3}
          h={10}
          resizeMode='contain'
        />

        <Heading
          fontFamily='heading'
          color='gray.100'
          fontSize='lg'
          mb={2}
        >
          Boas vindas!
        </Heading>


        <Text
          fontFamily='body'
          color='gray.200'
          fontSize='sm'
          textAlign='center'
          mb={8}
        >
          Crie sua conta e use o espaço para comprar {'\n'} itens variados e vender seus produtos
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Box
            h={22}
            w={22}
            rounded='full'
            borderWidth={3}
            borderColor='blue.100'
            justifyContent='center'
            alignItems='center'
            bgColor='gray.500'
            mb={4}
          >
            <Icon
              as={Feather}
              name='user'
              color='gray.300'
              size={12}
            />

            <Box
              position='absolute'
              bgColor='blue.100'
              bottom={0}
              right={-10}
              w={10}
              h={10}
              rounded='full'
              justifyContent='center'
              alignItems='center'
            >
              <Icon
                as={Feather}
                name='edit-3'
                color='gray.700'
                size={4}
              />
            </Box>
          </Box>
        </TouchableOpacity>

        <Input
          placeholder='Nome'
        />

        <Input
          placeholder='E-mail'
        />

        <Input
          placeholder='Telefone'
        />

        <Input
          placeholder='Senha'
          secureTextEntry={true}
        />

        <Button
          title='Entrar'
          color='black'
          mt={4}
          w='full'
        />

        <Text mt={12} mb={4}>
          Já tem uma conta?
        </Text>

        <Button
          title='Ir para o login'
          color='gray'
          mb={12}
          w='full'
          onPress={() => navigation.navigate('signIn')}
        />
      </Center>
    </ScrollView>
  )
}