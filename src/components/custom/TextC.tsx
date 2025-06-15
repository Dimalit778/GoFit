import { verticalScale } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { Text, TextProps, TextStyle } from 'react-native'

type TextCProps = {
  size?: number
  color?: string
  fontWeight?: TextStyle['fontWeight']
  children: any | null
  style?: TextStyle
  textProps?: TextProps
}

export default function TextC({
  size,
  color = theme.colors.text,
  fontWeight = '400',
  children,
  style,
  textProps = {},
}: TextCProps) {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  }
  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  )
}
