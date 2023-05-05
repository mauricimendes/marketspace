import { Box, HStack, Heading, Icon, Tag } from 'native-base'
import { Feather } from '@expo/vector-icons'

export function SelectTag() {
  return (
    <Tag bgColor='blue.100' rounded='full' px={4} py={2} mr={2}>
      <HStack alignItems='center'>
        <Heading
          fontFamily='heading'
          fontSize='xs'
          color='white'
        >
          NOVO
        </Heading>
        <Box
          ml={1}
          rounded='full'
          h={3}
          w={3}
          bgColor='gray.700'
          alignItems='center'
          justifyContent='center'
        >
          <Icon
            as={Feather}
            name='x'
            size={2}
            color='blue.100'
          />
        </Box>
      </HStack>
    </Tag>
  )
}