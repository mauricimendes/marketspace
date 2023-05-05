import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Icon,
  HStack,
  Divider,
  Box
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

type Props = IInputProps & {
  onSearch: () => void
  onOpenFilter: () => void
}

export function FilterInput({ onOpenFilter, onSearch, ...rest }: Props) {

  return (
    <FormControl mb={4}>
      <NativeBaseInput
        bg='gray.700'
        h={11}
        borderWidth={0}
        fontSize='md'
        color='gray.200'
        fontFamily='body'
        placeholderTextColor='gray.400'
        InputRightElement={
          <HStack mr={2}>
            <TouchableOpacity onPress={onSearch} activeOpacity={0.6}>
              <Icon
                as={Feather}
                name='search'
                color='gray.200'
                size={5}
              />
            </TouchableOpacity>
            <Divider
              orientation='vertical'
              mx={2}
              color='gray.400'
            />
            <TouchableOpacity onPress={onOpenFilter} activeOpacity={0.6}>
              <Icon
                as={Feather}
                name='sliders'
                color='gray.200'
                size={5}
              />
            </TouchableOpacity>
          </HStack>
        }
        _invalid={{
          borderWidth: 1,
          borderColor: 'gray.300'
        }}
        _focus={{
          borderWidth: 1,
          borderColor: 'gray.300',
          bgColor: 'gray.700'
        }}

        {...rest}
      />
    </FormControl>
  )
}