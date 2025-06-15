import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

const AvoidKeyboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Use 'height' or 'padding' for Android if 'undefined' doesn't work well
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 20} // Adjust offset based on your header/status bar
    >
      {children}
    </KeyboardAvoidingView>
  )
}

export default AvoidKeyboard
