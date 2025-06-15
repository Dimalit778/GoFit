import AuthGoogle from '@/components/AuthGoogle'
import AvoidKeyboard from '@/components/custom/AvoidKeyboard'
import ButtonC from '@/components/custom/ButtonC'
import InputC from '@/components/custom/InputC'
import TextC from '@/components/custom/TextC'

import { radius, spacingX, spacingY, verticalScale } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { useSignIn } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { Envelope, Lock } from 'phosphor-react-native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function LoginScreen() {
  const { signIn, setActive, isLoaded } = useSignIn()

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSignInPress = async () => {
    if (!isLoaded) return
    setLoading(true)
    setError('')
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      })
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
    setLoading(false)
  }

  return (
    <AvoidKeyboard>
      <ScrollView style={styles.container}>
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <TextC size={28} fontWeight={'bold'}>
            Welcome Back
          </TextC>
          <TextC size={16} fontWeight={'bold'}>
            Sign in to continue
          </TextC>
        </View>
        {/* form */}
        <View style={{ gap: spacingY._20 }}>
          <InputC
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="off"
            textContentType="username"
            icon={<Envelope size={verticalScale(28)} color={theme.colors.textSecondary} weight="light" />}
          />
          <InputC
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="off"
            textContentType="oneTimeCode"
            icon={<Lock size={verticalScale(28)} color={theme.colors.textSecondary} weight="light" />}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TextC size={14} fontWeight={'bold'} style={{ textAlign: 'right', marginTop: spacingY._5 }}>
            Forgot password?
          </TextC>

          <ButtonC onPress={onSignInPress} loading={loading} disabled={loading}>
            <TextC size={16} fontWeight={'bold'} color={theme.colors.background}>
              Sign In
            </TextC>
          </ButtonC>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <TextC size={14} fontWeight={'bold'} color={theme.colors.textSecondary} style={styles.dividerText}>
              OR
            </TextC>
            <View style={styles.dividerLine} />
          </View>
          <AuthGoogle signIn={signIn} loading={loading} setLoading={setLoading} setError={setError} />
          <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/sign-up')}>
            <TextC size={14} color={theme.colors.text} style={{ textAlign: 'center', marginTop: spacingY._10 }}>
              Don&apos;t have an account? Sign up
            </TextC>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AvoidKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingTop: spacingY._10,
    paddingHorizontal: spacingX._20,
  },

  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: theme.colors.text,
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: theme.colors.textSecondary,
    marginBottom: verticalScale(10),
  },

  input: {
    backgroundColor: theme.colors.card,
    borderRadius: radius._10,
    padding: verticalScale(10),
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: radius._10,
    padding: verticalScale(10),
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  dividerLine: {
    flex: 1,
    height: 1.2,
    backgroundColor: theme.colors.textSecondary,
  },
  dividerText: {
    marginHorizontal: verticalScale(10),
    color: theme.colors.textSecondary,
    // fontFamily: "Inter-Medium",
  },
  googleButton: {
    backgroundColor: theme.colors.card,
    borderRadius: radius._10,
    padding: verticalScale(10),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  googleButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  linkButton: {
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  linkText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
})
