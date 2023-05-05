import { Platform, TouchableOpacity } from 'react-native'
import { Icon, useTheme } from 'native-base'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import { Home } from '@screens/Home'
import { Logout } from '@screens/Logout'
import { ItemDetails } from '@screens/ItemDetails'
import { MyAds } from '@screens/MyAds'

type AppRoutes = {
  home: undefined
  myAds: undefined
  logout: undefined
  itemDetails: undefined
}

export type AppNavigationRouteProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()
  const navigation = useNavigation<AppNavigationRouteProps>()

  const iconSize = sizes[1.5]

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.gray[200],
      tabBarInactiveTintColor: colors.gray[400],
      tabBarStyle: {
        backgroundColor: colors.gray[700],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) =>
            <Icon
              as={Feather}
              name='home'
              color={color}
              size={iconSize}
            />
        }}
      />

      <Screen
        name='myAds'
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon
              as={Feather}
              name='tag'
              color={color}
              size={iconSize}
            />
          },
          headerShown: true,
          headerTitle: 'Meus anúncios',
          headerLeft: () => null,
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            justifyContent: 'center'
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('home')}
                activeOpacity={0.6}
                style={{ marginRight: 24 }}
              >
                <Icon
                  as={Feather}
                  name='plus'
                  color='gray.100'
                  size={6}
                />
              </TouchableOpacity>
            )
          },
          headerStyle: {
            backgroundColor: colors.gray[600],
          }
        }}
      />

      <Screen
        name='logout'
        component={Logout}
        options={{
          tabBarIcon: ({ color }) =>
            <Icon
              as={Feather}
              name='log-out'
              color='red.100'
              size={iconSize}
            />
        }}
      />

      <Screen
        name='itemDetails'
        component={ItemDetails}
        options={{
          tabBarButton: () => null,
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.gray[600]
          },
          headerTitle: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('home')}
                activeOpacity={0.6}
              >
                <Icon
                  as={Feather}
                  name='arrow-left'
                  color='gray.100'
                  size={6}
                />
              </TouchableOpacity>)
          },
          tabBarStyle: {
            display: 'none'
          }
        }}
      />

    </Navigator>
  )
}