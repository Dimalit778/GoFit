import { radius, spacingX, spacingY, verticalScale } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native'

export type InputCProps = {
  icon?: React.ReactNode
  containerStyle?: ViewStyle
  inputStyle?: TextStyle
  inputRef?: React.RefObject<TextInput>
} & TextInputProps

export default function InputC(props: InputCProps) {
  return (
    <View style={[styles.container, props.containerStyle && props.containerStyle]}>
      {props.icon && props.icon}
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={theme.colors.textSecondary}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: radius._10,
    borderCurve: 'continuous',
    paddingHorizontal: spacingX._12,
    gap: spacingX._10,
  },
  input: {
    flex: 1,
    color: theme.colors.text,
    fontSize: verticalScale(16),
    paddingVertical: spacingY._5,
  },
})
