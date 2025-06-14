import { spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { BlurView } from 'expo-blur'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
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
    <BlurView intensity={100} style={styles.content}>
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
          <Pressable style={[styles.button, styles.backButton]} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
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

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <View key={index} style={[styles.progressDot, currentStep >= index + 1 && styles.activeProgressDot]} />
        ))}
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: spacingY._20,
  },
  header: {
    marginBottom: spacingY._10,
    alignItems: 'center',
    gap: spacingY._10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: spacingY._5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: spacingY._30,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacingY._20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#e0e0e0',
  },
  nextButton: {
    backgroundColor: theme.colors.yellow,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  nextButtonText: {
    color: '#fff',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
  },
  activeProgressDot: {
    backgroundColor: '#007AFF',
  },
})
