import { Icon, useTheme } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { DefaultTheme } from '@react-navigation/native'

type Props = TouchableOpacityProps

export function AddImageButton({ ...rest }: Props) {
    const { colors } = useTheme()
    const theme = DefaultTheme
    theme.colors.background = colors.gray[500]
     
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.background,
                marginRight: 52
            }}

            { ...rest }
        >
            <Icon 
                as={Feather}
                name='plus'
                color='gray.400'
                size={6}
            />
        </TouchableOpacity>
    )
}