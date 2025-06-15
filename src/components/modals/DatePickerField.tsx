import { InputC, TextC } from '@/components/custom'
import { radius } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, View } from 'react-native'

interface DatePickerFieldProps {
  label?: string
  value: Date
  onChange: (date: Date) => void
  placeholder?: string
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label = 'Birthday',
  value,
  onChange,
  placeholder,
}) => {
  const [show, setShow] = useState(false)

  const handleChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      onChange(selectedDate)
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextC size={16} color={theme.colors.text}>
        {label}
      </TextC>
      <Pressable onPress={() => setShow(true)}>
        <InputC
          placeholder={placeholder || new Date().toLocaleDateString()}
          value={value ? value.toLocaleDateString() : ''}
          placeholderTextColor={theme.colors.background}
          editable={false}
          pointerEvents="none"
        />
      </Pressable>
      {show && (
        <>
          <Pressable style={styles.overlay} onPress={() => setShow(false)} />
          <View style={styles.pickerContainer} pointerEvents="box-none">
            <DateTimePicker
              value={value}
              mode="date"
              onChange={handleChange}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              style={{ backgroundColor: theme.colors.textSecondary, borderRadius: radius._15 }}
            />
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    gap: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 10,
  },
  pickerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
  },
})
