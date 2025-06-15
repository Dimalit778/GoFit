import { ScreenWrapper } from '@/components/custom/ScreenWrapper'

import { Profile } from '@/utils/supabaseTypes'
import { useAuth, useUser } from '@clerk/clerk-expo'
import React, { useState } from 'react'

import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  const { user } = useUser()
  const { signOut } = useAuth()

  const [profileData, setProfileData] = useState<Profile | null>(null)

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hello, {user?.primaryEmailAddress?.emailAddress}! 👋</Text>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <Text style={styles.text}>
          Name: {profileData?.first_name} {profileData?.last_name}
        </Text>
        <Text style={styles.text}>Email: {profileData?.email}</Text>
        <Text style={styles.text}>Date of Birth: {profileData?.date_of_birth}</Text>
        <Text style={styles.text}>Gender: {profileData?.gender}</Text>
        <Text style={styles.text}>Height: {profileData?.height}</Text>
        <Text style={styles.text}>Weight: {profileData?.weight}</Text>
        <Text style={styles.text}>Body Type: {profileData?.body}</Text>
        <Text style={styles.text}>Activity Level: {profileData?.activity}</Text>
        <Text style={styles.text}>Fitness Goal: {profileData?.goal}</Text>
      </View>
      <View>{/* <Button title="Save Profile" onPress={handleSaveProfile} /> */}</View>

      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={() => signOut()} />
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  profileSection: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    maxWidth: 400,
  },
})
