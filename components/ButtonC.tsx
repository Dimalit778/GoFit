import { radius, spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import React, { ReactNode } from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'

interface ButtonCProps extends TouchableOpacityProps {
  style?: ViewStyle
  onPress: () => void
  loading?: boolean
  disabled?: boolean
  hasShadow?: boolean
  children?: ReactNode
}

export default function ButtonC({ style, onPress, loading, children, hasShadow, disabled, ...rest }: ButtonCProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style, { opacity: loading || disabled ? 0.3 : 1 }]}
      onPress={onPress}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? <ActivityIndicator size="small" color={theme.colors.background} /> : children}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.yellow,
    padding: spacingY._15,
    borderRadius: radius._15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
