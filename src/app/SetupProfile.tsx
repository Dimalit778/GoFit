import { ScreenWrapper } from '@/components/custom/ScreenWrapper'
import { GenderSelection } from '@/components/setupProfile/GenderSelection'
import { UserInformation } from '@/components/setupProfile/UserInformation'
import { WorkoutExperience } from '@/components/setupProfile/WorkoutExperience'
import { ProfileSetupProvider, useProfileSetup } from '@/contexts/ProfileSetupContext'

function ProfileSetupContent() {
  const { currentStep } = useProfileSetup()
  switch (currentStep) {
    case 1:
      return <GenderSelection />
    case 2:
      return <UserInformation />
    case 3:
      return <WorkoutExperience />
    default:
      return null
  }
}

export default function ProfileSetup() {
  return (
    <ScreenWrapper>
      <ProfileSetupProvider>
        <ProfileSetupContent />
      </ProfileSetupProvider>
    </ScreenWrapper>
  )
}
