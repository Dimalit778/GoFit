import TextC from '@/components/TextC'
import { spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { useSupabase } from '@/contexts/SupabaseProvider'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Redirect, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { ScreenWrapper } from '../components/ScreenWrapper'
import { BodyFormSelection } from '../components/setupProfile/BodyFormSelection'
import { BodyMeasurements } from '../components/setupProfile/BodyMeasurements'
import { GenderSelection } from '../components/setupProfile/GenderSelection'
import { WorkoutExperience } from '../components/setupProfile/WorkoutExperience'
import { ProfileSetupProvider, useProfileSetup } from '../contexts/ProfileSetupContext'

// import { ProfileSetupProvider, useProfileSetup } from "../../contexts/ProfileSetupContext";

function ProfileSetupContent() {
  const { user } = useUser()
  const router = useRouter()
  const { getProfile } = useSupabase()
  const [isLoading, setIsLoading] = useState(true)
  const { isSignedIn } = useAuth()
  const { currentStep } = useProfileSetup()

  useEffect(() => {
    const checkProfile = async () => {
      if (!user) return

      try {
        const profile = await getProfile()
        if (profile?.first_name) {
          router.replace('/(tabs)')
        }
      } catch (error) {
        console.error('Error checking profile:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkProfile()
  }, [isSignedIn, user, router, getProfile])
  // Redirect if not authenticated
  if (!isSignedIn) {
    return <Redirect href="/" />
  }
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  switch (currentStep) {
    case 1:
      return <GenderSelection />
    case 2:
      return <BodyMeasurements />
    case 3:
      return <BodyFormSelection />
    case 4:
      return <WorkoutExperience />
    default:
      return null
  }
}

export default function ProfileSetup() {
  return (
    <ScreenWrapper>
      <TextC
        size={24}
        fontWeight="bold"
        color={theme.colors.primary}
        style={{ textAlign: 'center', marginTop: spacingY._15 }}
      >
        Complete Your Profile
      </TextC>
      <View style={{ height: 16 }} />
      <ProfileSetupProvider>
        <ProfileSetupContent />
      </ProfileSetupProvider>
    </ScreenWrapper>
  )
}
