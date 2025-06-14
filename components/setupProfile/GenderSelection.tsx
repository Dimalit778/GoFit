import { spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { Image } from 'expo-image'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useProfileSetup } from '../../contexts/ProfileSetupContext'
import { SetupLayout } from './SetupLayout'

export function GenderSelection() {
  const { updateProfileData, profileData, setCurrentStep } = useProfileSetup()

  const handleSelect = (gender: 'male' | 'female') => {
    updateProfileData({ gender })
  }

  const handleNext = () => {
    setCurrentStep(2)
  }

  return (
    <SetupLayout
      title="Choose Your Gender"
      subtitle="Select the option that best represents you"
      showBackButton={false}
      onNext={handleNext}
      isNextDisabled={!profileData.gender}
    >
      <View style={styles.container}>
        <Pressable
          style={[styles.option, profileData.gender === 'male' && styles.selectedOption]}
          onPress={() => handleSelect('male')}
        >
          <Image source={require('../../assets/images/man_image.png')} style={styles.image} contentFit="cover" />
        </Pressable>

        <Pressable
          style={[styles.option, profileData.gender === 'female' && styles.selectedOption]}
          onPress={() => handleSelect('female')}
        >
          <Image source={require('../../assets/images/woman_image.png')} style={styles.image} contentFit="cover" />
        </Pressable>
      </View>
    </SetupLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacingY._20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  option: {
    width: '45%',
    height: '55%',
    borderRadius: 30,
    backgroundColor: theme.colors.border,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedOption: {
    borderWidth: 5,

    borderColor: theme.colors.yellow,
  },
})
