import { PropsWithChildren } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

const ios = Platform.OS === 'ios'

export default function CustomKeyboardView({ children }: PropsWithChildren) {
  console.log('ios', ios)
  return (
    <KeyboardAvoidingView style={{ flex: 1, ...(ios ? { marginTop: 0 } : { marginTop: 100 }) }} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  )
}
