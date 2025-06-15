import { theme } from '@/constants/theme'
import { SupabaseProvider, useSupabase } from '@/contexts/SupabaseProvider'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { getClerk } from '@/utils/getClerk'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { defaultConfig } from '@tamagui/config/v4' // for quick config install this
import { Stack, usePathname } from 'expo-router'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createTamagui, TamaguiProvider } from 'tamagui'
import './../../i18n'

const config = createTamagui(defaultConfig)

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth()
  const { profile } = useSupabase()

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    )
  }
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar barStyle={'light-content'} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={profile && isSignedIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isSignedIn}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={isSignedIn && !profile}>
          <Stack.Screen name="(profileSetup)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </GestureHandlerRootView>
  )
}
const RootLayout = () => {
  const pathname = usePathname()
  console.log('pathname -----------', pathname)
  console.log('pathname', pathname)
  const { publishableKey, tokenCache } = getClerk()
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SupabaseProvider>
        <TamaguiProvider config={config}>
          <ThemeProvider>
            <InitialLayout />
          </ThemeProvider>
        </TamaguiProvider>
      </SupabaseProvider>
    </ClerkProvider>
  )
}

export default RootLayout
