import { HStack, Heading, Image, Text, VStack } from 'native-base'
import { Button } from '@components/Button'

import { useNavigation } from '@react-navigation/native'
import { AppNavigationRouteProps } from '@routes/app.routes'

export function HomeHeader() {
  const navigation = useNavigation<AppNavigationRouteProps>()

  return (
    <HStack mt={16}>
      <Image
        source={{ uri: 'https://github.com/mauricimendes.png' }}
        borderWidth={2}
        borderColor='blue.100'
        h={12}
        width={12}
        rounded='full'
        alt='Foto de perfíl'
      />

      <VStack justifyContent='center' flex={1} ml={2}>
        <Text
          fontFamily='body'
          fontSize='md'
          color='gray.100'
        >
          Boas vindas,
        </Text>

        <Heading
          fontFamily='heading'
          fontSize='md'
          color='gray.100'
        >
          Maurici RJ!
        </Heading>

      </VStack>

      <Button
        title='Criar anúncio'
        icon='plus'
        color='black'
        onPress={() => navigation.navigate('create')}
      />
    </HStack>
  )
}