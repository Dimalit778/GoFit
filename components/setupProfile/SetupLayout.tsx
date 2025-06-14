import { spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useProfileSetup } from '../../contexts/ProfileSetupContext'
import ButtonC from '../ButtonC'
import TextC from '../TextC'

type SetupLayoutProps = {
  children: React.ReactNode
  title: string
  subtitle?: string
  showBackButton?: boolean
  showNextButton?: boolean
  onNext?: () => void
  isNextDisabled?: boolean
}

export function SetupLayout({
  children,
  title,
  subtitle,
  showBackButton = true,
  showNextButton = true,
  onNext,
  isNextDisabled = false,
}: SetupLayoutProps) {
  const { currentStep, setCurrentStep } = useProfileSetup()

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <View style={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <TextC size={28} fontWeight="bold" color={theme.colors.text}>
          {title}
        </TextC>
        {subtitle && (
          <TextC size={16} color={theme.colors.textSecondary}>
            {subtitle}
          </TextC>
        )}
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>{children}</View>

      {/* Navigation */}
      <View style={styles.navigation}>
        {showBackButton && currentStep > 1 && (
          <ButtonC onPress={handleBack}>
            <TextC size={16} fontWeight="bold" color={theme.colors.background}>
              Back
            </TextC>
          </ButtonC>
        )}

        {showNextButton && (
          <ButtonC
            onPress={onNext ?? (() => {})}
            disabled={isNextDisabled}
            hasShadow={true}
            style={currentStep === 1 ? { flex: 1 } : undefined}
          >
            <TextC size={16} fontWeight="bold" color={theme.colors.background}>
              {currentStep === 4 ? 'Finish' : 'Next'}
            </TextC>
          </ButtonC>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: spacingY._20,
  },
  header: {
    marginTop: spacingY._30,
    alignItems: 'center',
    gap: spacingY._15,
  },

  mainContent: {
    flex: 1,
    marginTop: spacingY._20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacingY._25,
  },
})
