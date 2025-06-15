import BackButton from '@/components/custom/BackButton'
import { theme } from '@/constants/theme'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: '',
          headerStyle: { backgroundColor: theme.colors.background },
          headerShadowVisible: false,
          headerTintColor: theme.colors.text,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: '',
          headerStyle: { backgroundColor: theme.colors.background },
          headerShadowVisible: false,
          headerTintColor: theme.colors.text,
        }}
      />
    </Stack>
  )
}

export default AuthLayout
