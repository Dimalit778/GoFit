import { radius, verticalScale } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

type BackButtonProps = {
  style?: ViewStyle
  iconSize?: number
}

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
  const router = useRouter()

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => router.dismissAll()}>
      <CaretLeft size={verticalScale(iconSize)} color={theme.colors.text} weight="bold" />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.border,
    alignSelf: 'flex-start',
    borderRadius: radius._10,
    borderCurve: 'continuous',
    padding: 5,
  },
})
