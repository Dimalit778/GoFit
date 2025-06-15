import { theme } from '@/constants/theme'
import { Dimensions, Platform, View, ViewStyle } from 'react-native'

const { height } = Dimensions.get('window')

type ScreenWrapperProps = {
  style?: ViewStyle
  children: React.ReactNode
}

export function ScreenWrapper({ style, children }: ScreenWrapperProps) {
  let paddingTop = Platform.OS === 'ios' ? height * 0.07 : 50
  return <View style={[{ paddingTop, flex: 1, backgroundColor: theme.colors.primary }, style]}>{children}</View>
}
