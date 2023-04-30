import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  color?: 'blue' | 'black' | 'gray'
}

export function Button({ title, color = 'blue', ...rest }: Props) {
  return (
    <NativeBaseButton
      bgColor={color === 'black' ? 'gray.100' : color === 'blue' ? 'blue.100' : 'gray.500'}
      h={11}
      w='full'
      rounded='sm'
      _pressed={{
        bgColor: color === 'black' ? 'gray.200' : color === 'blue' ? 'blue.500' : 'gray.600'
      }}

      {...rest}
    >
      <Text
        color={color === 'black' ? 'gray.700' : color === 'blue' ? 'gray.700' : 'gray.200'}
        fontFamily='heading'
        fontSize='sm'
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}