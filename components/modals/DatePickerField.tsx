import { theme } from '@/constants/theme'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import TextC from '../TextC'

interface DatePickerFieldProps {
  label?: string
  value: string
  onChange: (date: Date) => void
  placeholder?: string
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label = 'Birthday',
  value,
  onChange,
  placeholder = 'Select Date',
}) => {
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleChange = (event: any, selectedDate?: Date) => {
    setShow(false)
    if (selectedDate) {
      setDate(selectedDate)
      onChange(selectedDate)
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextC size={16} fontWeight="bold" color={theme.colors.text}>
        {label}
      </TextC>
      <Pressable onPress={() => setShow(true)}>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'red' }}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={theme.colors.textSecondary}
          editable={false}
          pointerEvents="none"
        />
      </Pressable>
      {show && <DateTimePicker value={date} mode="date" onChange={handleChange} display="spinner" />}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    gap: 10,
  },
})
