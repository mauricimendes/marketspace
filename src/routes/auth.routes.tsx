import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

type AuthRoutes = {
  signIn: undefined
  signUp: undefined
}

export type AuthNavigationRouteProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='signIn'
        component={SignIn}
      />

      <Screen
        name='signUp'
        component={SignUp}
      />
    </Navigator>
  )
}