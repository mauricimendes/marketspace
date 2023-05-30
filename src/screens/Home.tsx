import { Dimensions, TouchableOpacity } from 'react-native'
import {
  HStack,
  Heading,
  Icon,
  ScrollView,
  Text,
  VStack,
  FlatList,
  Box,
  Modal,
  Center,
  Switch,
  Checkbox
} from 'native-base'

import { HomeHeader } from '@components/HomeHeader'
import { Feather } from '@expo/vector-icons'
import { FilterInput } from '@components/FilterInput'
import { AdsCard } from '@components/AdsCard'
import { useState } from 'react'
import { SelectTag } from '@components/SelectTag'
import { Button } from '@components/Button'


export function Home() {
  const teste = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const paymentMethods = ['Boleto', 'Pix', 'Dinheiro', 'Cartão de Crédito', 'Depósito Bancário']

  const [openModalFilter, setOpenModalFilter] = useState(false)

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
        mb={4}
        onSearch={() => { }}
        onOpenFilter={() => setOpenModalFilter(true)}
      />

      <FlatList
        data={teste}
        scrollEnabled={false}
        keyExtractor={item => item}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <Box mb={4}>
            <AdsCard />
          </Box>
        )}
      />

      <Modal isOpen={openModalFilter}  onClose={() => setOpenModalFilter(false)} safeAreaTop={true}>
        <Modal.Content mb={0} w='full' mt='auto' >
          <Modal.Body>
            <Center flex={1}>
              <Box h={1} rounded='full' bgColor='gray.400' w={14} />
            </Center>

            <VStack>
              <HStack mt={8} justifyContent='space-between' alignItems='center'>
                <Heading
                  fontFamily='heading'
                  color='gray.100'
                  fontSize='lg'
                >
                  Filtrar anúncios
                </Heading>
                <Modal.CloseButton top={-1} />
              </HStack>

              <Heading mt={6} fontFamily='heading' color='gray.200' fontSize='sm'>
                Condição
              </Heading>

              <HStack mt={3}>
                <SelectTag />
                <SelectTag />
              </HStack>
            </VStack>

            <Heading mt={6} fontFamily='heading' color='gray.200' fontSize='sm'>
              Aceita troca?
            </Heading>

            <HStack>
              <Switch
                onTrackColor='blue.100'
                offTrackColor='gray.500'
                size='lg'
              />
            </HStack>

            <Heading mt={6} fontFamily='heading' color='gray.200' fontSize='sm'>
              Meios de pagamento aceitos
            </Heading>

            <VStack mt={3}>
              {
                paymentMethods.map(paymentMethod => (
                  <Checkbox key={paymentMethod} value='1' defaultIsChecked _checked={{
                    colorScheme: 'blue.100',
                  }}>
                    <Text fontSize='md' color='gray.200' fontFamily='body' >
                      {paymentMethod}
                    </Text>
                  </Checkbox>
                ))
              }
            </VStack>

            <HStack mt={16} flex={1} style={{ gap: 8 }}>
              <Button flex={1} title='Resetar filtros' color='gray' />
              <Button flex={1} title='Aplicar filtros' color='black' />
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>

    </ScrollView>
  )
}