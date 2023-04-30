import { TouchableOpacity } from 'react-native'
import {
  HStack,
  Heading,
  Icon,
  ScrollView,
  Text,
  VStack,
  Input as NativeBaseFilterInput
} from 'native-base'

import { HomeHeader } from '@components/HomeHeader'
import { Feather } from '@expo/vector-icons'
import { FilterInput } from '@components/FilterInput'

export function Home() {
  return (
    <ScrollView flex={1} bgColor='gray.600' px={6}>
      <HomeHeader />

      <Text
        fontFamily='body'
        fontSize={14}
        color='gray.300'
        mt={8}
        mb={3}
      >
        Seus produtos anunciados para venda
      </Text>

      <HStack
        bgColor='blue.50'
        py={3}
        px={4}
        alignItems='center'
        rounded='md'
        mb={8}
      >
        <Icon
          as={Feather}
          name='tag'
          color='blue.500'
          size={6}
        />

        <VStack ml={4} flex={1}>
          <Heading
            color='gray.200'
            fontFamily='heading'
            fontSize='lg'
          >
            4
          </Heading>

          <Text
            color='gray.200'
            fontFamily='body'
            fontSize='xs'
          >
            anúncios ativos
          </Text>
        </VStack>

        <TouchableOpacity activeOpacity={0.6}>
          <HStack alignItems='center'>
            <Heading
              color='blue.500'
              fontFamily='heading'
              fontSize='xs'
            >
              Meus anúncios
            </Heading>
            <Icon
              as={Feather}
              name='arrow-right'
              color='blue.500'
              size={4}
              ml={2}
            />
          </HStack>
        </TouchableOpacity>
      </HStack>

      <Text
        fontFamily='body'
        fontSize={14}
        color='gray.300'
        mb={3}
      >
        Compre produtos variados
      </Text>

      <FilterInput
        placeholder='Buscar anúncio'
      />
    </ScrollView>
  )
}