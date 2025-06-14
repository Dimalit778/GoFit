import { theme } from "@/constants/theme";
import { SupabaseProvider } from "@/contexts/SupabaseProvider";
import { getClerk } from "@/utils/getClerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const InitialLayout = () => {
  
  const { isLoaded, isSignedIn } = useAuth();
  useEffect(() => {
    if (!isLoaded ) return;
    if (isSignedIn) {
      router.replace("/(tabs)");
    }else{
      router.replace("/");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }
  return (
    
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SupabaseProvider>
       <StatusBar barStyle={'light-content'} />
       <Stack screenOptions={{ headerShown: false }}>
      </Stack>
      </SupabaseProvider>
      </GestureHandlerRootView>
    
  );
}
const RootLayout = (  ) => {
  const { publishableKey, tokenCache } = getClerk();
  return (
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
          <InitialLayout />
      </ClerkProvider>
 
  );
};

export default RootLayout;