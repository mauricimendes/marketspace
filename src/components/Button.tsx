import { Button as NativeBaseButton, IButtonProps, Text, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'

type Props = IButtonProps & {
  title: string
  color?: 'blue' | 'black' | 'gray'
  icon?: string
}

export function Button({ title, color = 'blue', icon, ...rest }: Props) {
  return (
    <NativeBaseButton
      bgColor={color === 'black' ? 'gray.100' : color === 'blue' ? 'blue.100' : 'gray.500'}
      h={11}
      rounded='sm'
      _pressed={{
        bgColor: color === 'black' ? 'gray.200' : color === 'blue' ? 'blue.500' : 'gray.600'
      }}
      leftIcon={
        !!icon ?
          <Icon
            as={Feather}
            name={icon}
            color={color === 'black' ? 'gray.700' : color === 'blue' ? 'gray.700' : 'gray.200'}
            size={4}
          /> : undefined
      }

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