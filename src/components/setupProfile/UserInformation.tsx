import { spacingX, spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useProfileSetup } from '../../contexts/ProfileSetupContext'
import { InputC, TextC } from '../custom'
import { DatePickerField } from '../modals/DatePickerField'
import { SetupLayout } from './SetupLayout'

export function UserInformation() {
  const { updateProfileData, profileData, setCurrentStep } = useProfileSetup()
  const [heightRaw, setHeightRaw] = useState(String(profileData.height ?? ''))
  const [weight, setWeight] = useState(String(profileData.weight ?? ''))
  const [dateOfBirth, setDateOfBirth] = useState(new Date())

  const formatHeight = (val: string) => {
    if (!val) return ''
    if (val.length === 3) {
      return val[0] + '.' + val.slice(1)
    }
    return val
  }

  const handleHeightChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 3)
    setHeightRaw(digits)
  }

  const handleWeightChange = (val: string) => {
    const match = val.match(/^\d{0,3}(\.\d?)?$/)
    if (match) {
      setWeight(val)
    }
  }

  const isValidHeight = heightRaw.length === 2 || heightRaw.length === 3
  const isValidWeight = /^\d{2,3}(\.\d)?$/.test(weight)
  const isValid = isValidHeight && isValidWeight

  const handleNext = () => {
    let heightNum: number | null = null
    if (heightRaw.length === 3) {
      heightNum = parseFloat(heightRaw[0] + '.' + heightRaw.slice(1))
    } else if (heightRaw.length === 2) {
      heightNum = parseFloat(heightRaw)
    }
    const weightNum = parseFloat(weight)
    if (heightNum && weightNum) {
      updateProfileData({ height: heightNum, weight: weightNum })
      setCurrentStep(3)
    }
  }

  return (
    <SetupLayout
      title="Your Measurements"
      subtitle="Enter your height and weight"
      onNext={handleNext}
      isNextDisabled={!isValid}
    >
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}> */}
      <View style={styles.container}>
        {/* Birth day Form */}
        <View style={styles.inputContainer}>
          <DatePickerField value={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />
        </View>
        {/* Height Form */}
        <View style={styles.inputContainer}>
          <TextC size={16} fontWeight="bold" color={theme.colors.text}>
            Height (m)
          </TextC>
          <InputC
            placeholder="1.70"
            value={formatHeight(heightRaw)}
            onChangeText={handleHeightChange}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
        {/* Weight Form */}
        <View style={styles.inputContainer}>
          <TextC size={16} fontWeight="bold" color={theme.colors.text}>
            Weight (kg)
          </TextC>
          <InputC
            placeholder="60.5"
            value={weight}
            onChangeText={handleWeightChange}
            keyboardType="decimal-pad"
            maxLength={5}
          />
        </View>
        {/* Body Type Form */}
        <View style={styles.inputContainer}>
          <TextC size={16} fontWeight="bold" color={theme.colors.text}>
            Body Type
          </TextC>
        </View>
      </View>
      {/* </ScrollView> */}
    </SetupLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacingY._30,
    gap: spacingY._25,
    paddingHorizontal: spacingX._20,
    position: 'relative',
  },
  inputContainer: {
    gap: spacingY._10,
  },
})
