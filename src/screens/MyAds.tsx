import { useState } from 'react'

import { Box, FlatList, HStack, Select, Text, VStack } from 'native-base'
import { AdsCard } from '@components/AdsCard'

export function MyAds() {
  const [service, setService] = useState('1')
  const teste = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <VStack flex={1} bgColor='gray.600'>
      <HStack px={6} mt={6} justifyContent='space-between' alignItems='center' >
        <Text fontSize='sm' color='gray.200' fontFamily='body'>
          9 anúncios
        </Text>

        <Select
          selectedValue={service}
          minWidth={32}
          onValueChange={itemValue => setService(itemValue)}
        >
          <Select.Item label='Todos' value='1' />
          <Select.Item label='Ativos' value='2' />
          <Select.Item label='Inativos' value='3' />
        </Select>
      </HStack>

      <FlatList
        px={6}
        mt={7}
        showsVerticalScrollIndicator={false}
        data={teste}
        keyExtractor={item => item}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <Box >
            <AdsCard />
          </Box>
        )}
      />
    </VStack>
  )
}