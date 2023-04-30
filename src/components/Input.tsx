import { useState } from 'react'
import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Icon,
  Pressable
} from 'native-base'
import { Feather } from '@expo/vector-icons'

type Props = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, secureTextEntry, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  const isPasswordIcon = secureTextEntry
  const [isPasswordType, setIsPasswordType] = useState(secureTextEntry)

  function handleSeePassword() {
    setIsPasswordType(state => !state)
  }

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg='gray.700'
        h={11}
        borderWidth={0}
        fontSize='md'
        color='gray.200'
        fontFamily='body'
        placeholderTextColor='gray.400'
        isInvalid={invalid}
        InputRightElement={
          isPasswordIcon ?
            <Pressable onPress={handleSeePassword}>
              <Icon
                as={Feather}
                name='eye'
                color='gray.300'
                size={5}
                mr={2}
              />
            </Pressable> : undefined
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
        secureTextEntry={isPasswordType}

        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}