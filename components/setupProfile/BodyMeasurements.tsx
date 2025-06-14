import { spacingX, spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useProfileSetup } from '../../contexts/ProfileSetupContext'
import { DatePickerField } from '../modals/DatePickerField'
import TextC from '../TextC'
import { SetupLayout } from './SetupLayout'

export function BodyMeasurements() {
  const { updateProfileData, profileData, setCurrentStep } = useProfileSetup()
  const [height, setHeight] = useState(String(profileData.height ?? ''))
  const [weight, setWeight] = useState(String(profileData.weight ?? ''))

  const handleNext = () => {
    const heightNum = parseFloat(height)
    const weightNum = parseFloat(weight)

    if (heightNum && weightNum) {
      updateProfileData({ height: heightNum, weight: weightNum })
      setCurrentStep(3)
    }
  }

  const isValid = height && weight && !isNaN(Number(height)) && !isNaN(Number(weight))
  const [date, setDate] = useState(new Date())
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [show, setShow] = useState(false)
  console.log('show', show)

  const onChange = (event: any, selectedDate?: Date) => {
    console.log('clicked')
    setShow(false)
    if (selectedDate) {
      setDate(selectedDate)
      setDateOfBirth(selectedDate.toLocaleDateString())
    }
  }

  return (
    <SetupLayout
      title="Your Measurements"
      subtitle="Enter your height and weight"
      onNext={handleNext}
      isNextDisabled={!isValid}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextC size={16} fontWeight="bold" color={theme.colors.text}>
            Birthday
          </TextC>
          <DatePickerField value={dateOfBirth} onChange={(date) => setDateOfBirth(date.toLocaleDateString())} />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextC size={16} fontWeight="bold" color={theme.colors.text}>
            Height (cm)
          </TextC>
          <InputC placeholder="00.0" value={height} onChangeText={setHeight} inputMode="decimal" maxLength={4} />
        </View>

        <View style={styles.inputContainer}>
          <TextC size={16} fontWeight="bold" color={theme.colors.text}>
            Weight (kg)
          </TextC>
          <InputC placeholder="00.0" value={weight} onChangeText={setWeight} inputMode="decimal" maxLength={5} />
        </View> */}
      </View>
    </SetupLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacingY._30,
    gap: spacingY._25,
    paddingHorizontal: spacingX._20,
  },
  inputContainer: {
    gap: spacingY._10,
  },
})
