import AuthGoogle from '@/components/AuthGoogle'
import BackButton from '@/components/BackButton'
import ButtonC from '@/components/ButtonC'
import InputC from '@/components/InputC'
import { ScreenWrapper } from '@/components/ScreenWrapper'
import TextC from '@/components/TextC'
import { radius, spacingX, spacingY, verticalScale } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Envelope, Lock } from 'phosphor-react-native'

import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SignUpScreen() {
  const { signUp, setActive } = useSignUp()

  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateForm = () => {
    if (!firstName.trim()) {
      setError('First name is required')
      return false
    }
    if (!lastName.trim()) {
      setError('Last name is required')
      return false
    }
    if (!email.trim()) {
      setError('Email is required')
      return false
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return false
    }
    return true
  }

  const onSignUpPress = async () => {
    if (!signUp) return
    if (!validateForm()) return

    setLoading(true)
    setError('')

    try {
      const completeSignUp = await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      })
      // await completeSignUp.prepareEmailAddressVerification();
      await setActive({ session: completeSignUp.createdSessionId })
      router.replace('/(tabs)')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={30} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <TextC size={28} fontWeight={'bold'}>
            Create Account
          </TextC>
          <TextC size={16} fontWeight={'bold'}>
            Sign up to get started
          </TextC>
        </View>

        <View style={{ gap: spacingY._15 }}>
          <View style={{ flexDirection: 'row', gap: verticalScale(10) }}>
            <InputC
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
              autoComplete="off"
              textContentType="givenName"
              containerStyle={{ flex: 1 }}
            />
            <InputC
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
              autoComplete="off"
              textContentType="familyName"
              containerStyle={{ flex: 1 }}
            />
          </View>
          <InputC
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="off"
            textContentType="username"
            icon={<Envelope size={verticalScale(28)} color={theme.colors.textSecondary} weight="light" />}
          />
          <InputC
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="off"
            textContentType="oneTimeCode"
            icon={<Lock size={verticalScale(28)} color={theme.colors.textSecondary} weight="light" />}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <ButtonC onPress={onSignUpPress} disabled={loading} loading={loading}>
            <TextC size={16} fontWeight={'bold'} color={theme.colors.background}>
              Create Account
            </TextC>
          </ButtonC>
          <TouchableOpacity style={styles.linkButton} onPress={() => router.navigate('/login')}>
            <TextC size={14} color={theme.colors.text} style={{ textAlign: 'center', marginTop: spacingY._10 }}>
              Already have an account?
              <Link href="/login" asChild>
                <TextC
                  size={14}
                  color={theme.colors.primary}
                  style={{ textAlign: 'center', marginTop: spacingY._10, textDecorationLine: 'underline' }}
                >
                  Sign in
                </TextC>
              </Link>
            </TextC>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <AuthGoogle signUp={signUp} loading={loading} setLoading={setLoading} setError={setError} />
        </View>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    padding: spacingY._10,
    paddingHorizontal: spacingX._20,
  },

  title: {
    fontFamily: 'Inter-Bold',

    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontFamily: 'Inter-Regular',

    marginBottom: verticalScale(10),
  },
  form: {
    gap: verticalScale(10),
  },

  input: {
    backgroundColor: theme.colors.card,
    borderRadius: radius._10,
    padding: verticalScale(10),
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: theme.colors.text,
  },
  halfInput: {
    flex: 1,
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
    height: 1,
    backgroundColor: theme.colors.border,
  },
  dividerText: {
    marginHorizontal: verticalScale(10),
    color: theme.colors.textSecondary,
    fontFamily: 'Inter-Medium',
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
