import { Button } from '@components/Button'
import { Box, HStack, Heading, Icon, Image, ScrollView, Tag, Text, VStack } from 'native-base'
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import AdsTestProduct from '@assets/ads_test_product.png'

export function ItemDetails() {
  return (
    <VStack flex={1} bg='gray.600'>
      <ScrollView flex={1} mb={90}>
        <Image
          source={AdsTestProduct}
          resizeMode='contain'
          w='full'
          maxH={72}
          alt='Imagens do produto'
        />

        <HStack px={6} mt={5}>
          <Image
            source={{ uri: 'https://github.com/mauricimendes.png' }}
            h={6}
            w={6}
            mr={2}
            rounded='full'
            borderWidth={2}
            borderColor='blue.100'
            alt='Foto de perfil do anunciante'
          />

          <Text
            fontSize='sm'
            color='gray.100'
            fontFamily='body'
          >
            Makkena Baptista
          </Text>
        </HStack>

        <VStack px={6} mt={6}>
          <HStack>
            <Tag px={4} py={1} bgColor='gray.500' rounded='full'>
              <Heading
                fontFamily='heading'
                fontSize='x'
                color='gray.200'
              >
                NOVO
              </Heading>
            </Tag>
          </HStack>

          <HStack mt={4} justifyContent='space-between' alignItems='center'>
            <Heading
              fontSize='lg'
              fontFamily='heading'
              color='gray.100'
            >
              Bicicleta
            </Heading>
            <HStack alignItems='flex-end'>
              <Heading
                fontSize='sm'
                color='blue.100'
                fontFamily='heading'
                mr={1}
              >
                R$
              </Heading>
              <Heading
                fontSize='xl'
                color='blue.100'
                fontFamily='heading'
                mb={-1}
              >
                120,00
              </Heading>
            </HStack>
          </HStack>

          <Text
            fontFamily='body'
            fontSize='sm'
            color='gray.200'
            mt={4}
          >
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
          </Text>

          <HStack mt={6} alignItems='center'>
            <Heading
              fontFamily='heading'
              fontSize='sm'
              color='gray.200'
              mr={2}
            >
              Aceita troca?
            </Heading>
            <Text
              fontFamily='body'
              fontSize='sm'
              color='gray.200'
            >
              Sim
            </Text>
          </HStack>

          <Heading
            fontFamily='heading'
            fontSize='sm'
            color='gray.200'
            mr={2}
            mt={4}
          >
            Meios de pagamento:
          </Heading>

          <VStack mt={2} mb={7}>
            <HStack>
              <Icon
                as={Ionicons}
                name='md-barcode-outline'
                size={6}
                color='gray.100'
                mr={1}
              />
              <Text
                fontFamily='body'
                fontSize='sm'
                color='gray.200'
              >
                Boleto
              </Text>
            </HStack>

            <HStack>

              <Icon
                as={FontAwesome}
                name='qrcode'
                size={6}
                color='gray.100'
                mr={1}
              />
              <Text
                fontFamily='body'
                fontSize='sm'
                color='gray.200'
              >
                Pix
              </Text>
            </HStack>

            <HStack>
              <Icon
                as={FontAwesome}
                name='money'
                size={6}
                color='gray.100'
                mr={1}
              />
              <Text
                fontFamily='body'
                fontSize='sm'
                color='gray.200'
              >
                Dinheiro
              </Text>
            </HStack>

            <HStack>
              <Icon
                as={FontAwesome}
                name='credit-card'
                size={6}
                color='gray.100'
                mr={1}
              />
              <Text
                fontFamily='body'
                fontSize='sm'
                color='gray.200'
              >
                Cartão de Crédito
              </Text>
            </HStack>

            <HStack>

              <Icon
                as={MaterialCommunityIcons}
                name='bank-outline'
                size={6}
                color='gray.100'
                mr={1}
              />
              <Text
                fontFamily='body'
                fontSize='sm'
                color='gray.200'
              >
                Depósito Bancário
              </Text>
            </HStack>
          </VStack>

        </VStack>

      </ScrollView>

      <Box
        justifyContent='center'
        position='absolute'
        bottom={0}
        bgColor='gray.700'
        h={23}
        w='full'
        px={6}
      >
        <HStack justifyContent='space-between' alignItems='center'>
          <HStack alignItems='flex-end'>
            <Heading
              fontSize='sm'
              color='blue.100'
              fontFamily='heading'
              mr={1}
            >
              R$
            </Heading>
            <Heading
              fontSize='xl'
              color='blue.100'
              fontFamily='heading'
              mb={-1}
            >
              120,00
            </Heading>
          </HStack>

          <Button
            icon='phone'
            title='Entrar em contato'
          />
        </HStack>
      </Box>
    </VStack>
  )
}