import { TouchableOpacity } from 'react-native'
import { Tag, Box, HStack, Heading, Image, Text, VStack } from 'native-base'
import { AppNavigationRouteProps } from '@routes/app.routes'
import { useNavigation } from '@react-navigation/native'

import adsTestPNG from '@assets/ads_test_image.png'

export function AdsCard() {
  const state = 'new'
  const disabled = false

  const navigation = useNavigation<AppNavigationRouteProps>()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('itemDetails')}
      activeOpacity={0.6}
      style={{ marginBottom: 16 }}
    >
      {disabled &&
        <Box
          bgColor='gray.50'
          position='absolute'
          top={0}
          zIndex={10}
          h={26}
          rounded='sm'
        >
          <Text
            fontSize='xxs'
            color='gray.700'
            fontFamily='heading'
            position='absolute'
            bottom={2}
            zIndex={100}
            left={2}
          >
            Anuncio desativado
          </Text>
        </Box>
      }

      <Image
        source={{ uri: 'https://github.com/mauricimendes.png' }}
        alt='Foto de perfil do usuário dono do anúncio.'
        h={6}
        w={6}
        resizeMode='contain'
        position='absolute'
        zIndex={1}
        top={2}
        left={2}
        rounded='full'
        borderWidth={1}
        borderColor='gray.700'
      />

      <Tag
        position='absolute'
        zIndex={1}
        top={2}
        right={2}
        px={2}
        py={0.5}
        justifyContent='center'
        alignItems='center'
        rounded='full'
        bgColor={state === 'new' ? 'blue.500' : 'gray.200'}
      >
        <Text
          fontSize='x'
          fontFamily='heading'
          color='white'
        >
          {state === 'new' ? 'NOVO' : 'USADO'}
        </Text>
      </Tag>

      <Image
        source={adsTestPNG}
        alt='Image do produto do anúncio.'
        rounded='sm'
        resizeMode='contain'
        h={26}
        maxH={26}
      />
      <VStack>
        <Text
          color={disabled ? 'gray.400' : 'gray.200'}
          fontFamily='body'
          fontSize='sm'
        >
          Tênis vermelho
        </Text>
        <HStack alignItems='center'>
          <Heading
            color={disabled ? 'gray.400' : 'gray.100'}
            fontFamily='heading'
            fontSize='xs'
          >
            R$
          </Heading>
          <Heading
            color={disabled ? 'gray.400' : 'gray.100'}
            fontFamily='heading'
            fontSize='md'
            ml={1}
          >
            59,90
          </Heading>
        </HStack>
      </VStack>
    </TouchableOpacity>
  )
}