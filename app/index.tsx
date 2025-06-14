import TextC from '@/components/TextC'
import { radius, spacingX, spacingY } from '@/constants/sizes'
import { theme } from '@/constants/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { t } from 'i18next'
import { ArrowRight, Barbell, Lightning, Star, Target, TrendUp, Trophy, Users } from 'phosphor-react-native'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import '../i18n'

import { ScreenWrapper } from '../components/ScreenWrapper'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function LandingScreen() {
  const router = useRouter()

  const features = [
    {
      icon: <Barbell size={32} weight="duotone" color={theme.colors.accent} />,
      title: t('landing.features.workouts.title'),
      description: t('landing.features.workouts.description'),
      gradient: [theme.colors.accent + '20', theme.colors.primary + '10'],
    },
    {
      icon: <Target size={32} weight="duotone" color={theme.colors.secondary} />,
      title: t('landing.features.goals.title'),
      description: t('landing.features.goals.description'),
      gradient: [theme.colors.secondary + '20', theme.colors.accent + '10'],
    },
    {
      icon: <TrendUp size={32} weight="duotone" color={theme.colors.success} />,
      title: t('landing.features.progress.title'),
      description: t('landing.features.progress.description'),
      gradient: [theme.colors.success + '20', theme.colors.secondary + '10'],
    },
    {
      icon: <Users size={32} weight="duotone" color={theme.colors.yellow} />,
      title: t('landing.features.community.title'),
      description: t('landing.features.community.description'),
      gradient: [theme.colors.yellow + '20', theme.colors.primary + '10'],
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'FitFlow transformed my fitness journey. The AI workouts are incredible!',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      role: 'Fitness Enthusiast',
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: "Best fitness app I've ever used. The progress tracking is amazing.",
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      role: 'Personal Trainer',
    },
    {
      name: 'Emma Davis',
      rating: 5,
      text: 'Love the personalized nutrition plans. Finally seeing real results!',
      image:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      role: 'Nutritionist',
    },
  ]

  const achievements = [
    { icon: <Users size={24} color={theme.colors.accent} />, value: '50K+', label: t('landing.stats.users') },
    { icon: <Lightning size={24} color={theme.colors.yellow} />, value: '1M+', label: t('landing.stats.workouts') },
    { icon: <Trophy size={24} color={theme.colors.success} />, value: '95%', label: t('landing.stats.satisfaction') },
  ]

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary, theme.colors.accent]}
            style={styles.heroGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {/* Floating Elements */}
            <View style={styles.floatingElements}>
              <View style={[styles.floatingCircle, styles.circle1]} />
              <View style={[styles.floatingCircle, styles.circle2]} />
              <View style={[styles.floatingCircle, styles.circle3]} />
            </View>

            <View style={styles.heroContent}>
              <View style={styles.heroTextContainer}>
                <TextC size={36} fontWeight="900" color="#FFFFFF" style={styles.heroTitle}>
                  {t('landing.hero.title')}
                </TextC>

                <TextC size={18} fontWeight="500" color="#FFFFFF" style={styles.heroSubtitle}>
                  {t('landing.hero.subtitle')}
                </TextC>

                {/* Enhanced CTA Buttons */}
                <View style={styles.heroButtons}>
                  <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => router.push('/sign-up')}
                    activeOpacity={0.8}
                  >
                    <LinearGradient colors={['#FFFFFF', '#F8FAFC']} style={styles.buttonGradient}>
                      <TextC size={16} fontWeight="bold" color={theme.colors.primary}>
                        {t('landing.getStarted')}
                      </TextC>
                      <ArrowRight color={theme.colors.primary} size={20} />
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => router.push('/login')}
                    activeOpacity={0.8}
                  >
                    <TextC size={16} fontWeight="600" color="#FFFFFF">
                      {t('landing.signIn')}
                    </TextC>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Hero Image with Overlay */}
              <View style={styles.heroImageContainer}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
                  }}
                  style={styles.heroImage}
                  resizeMode="cover"
                />
                <LinearGradient colors={['transparent', theme.colors.primary + '40']} style={styles.imageOverlay} />
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Enhanced Features Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TextC size={32} fontWeight="800" color={theme.colors.text} style={styles.sectionTitle}>
              {t('landing.features.title')}
            </TextC>
            <TextC size={16} fontWeight="500" color={theme.colors.textSecondary} style={styles.sectionSubtitle}>
              {t('landing.features.subtitle')}
            </TextC>
          </View>

          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <TouchableOpacity key={index} style={styles.featureCard} activeOpacity={0.9}>
                <LinearGradient colors={feature.gradient as [string, string]} style={styles.featureGradient}>
                  <View style={styles.featureIconContainer}>{feature.icon}</View>

                  <TextC size={18} fontWeight="700" color={theme.colors.text} style={styles.featureTitle}>
                    {feature.title}
                  </TextC>

                  <TextC
                    size={14}
                    fontWeight="400"
                    color={theme.colors.textSecondary}
                    style={styles.featureDescription}
                  >
                    {feature.description}
                  </TextC>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Enhanced Stats Section */}
        <View style={styles.statsSection}>
          <LinearGradient
            colors={[theme.colors.surface, theme.colors.card, theme.colors.surface]}
            style={styles.statsGradient}
          >
            <View style={styles.statsGrid}>
              {achievements.map((achievement, index) => (
                <View key={index} style={styles.statItem}>
                  <View style={styles.statIconContainer}>{achievement.icon}</View>
                  <TextC size={20} fontWeight="900" color={theme.colors.text} style={styles.statNumber}>
                    {achievement.value}
                  </TextC>
                  <TextC size={10} fontWeight="700" color={theme.colors.textSecondary} style={styles.statLabel}>
                    {achievement.label}
                  </TextC>
                </View>
              ))}
            </View>
          </LinearGradient>
        </View>

        {/* Enhanced Testimonials Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TextC size={32} fontWeight="800" color={theme.colors.text} style={styles.sectionTitle}>
              {t('landing.testimonials.title')}
            </TextC>
            <TextC size={16} fontWeight="500" color={theme.colors.textSecondary} style={styles.sectionSubtitle}>
              {t('landing.testimonials.subtitle')}
            </TextC>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.testimonialsScroll}>
            {testimonials.map((testimonial, index) => (
              <View key={index} style={styles.testimonialCard}>
                <LinearGradient colors={[theme.colors.card, theme.colors.surface]} style={styles.testimonialGradient}>
                  <View style={styles.testimonialHeader}>
                    <View style={styles.avatarContainer}>
                      <Image source={{ uri: testimonial.image }} style={styles.testimonialAvatar} />
                      <View style={styles.avatarBorder} />
                    </View>

                    <View style={styles.testimonialInfo}>
                      <TextC size={16} fontWeight="700" color={theme.colors.text}>
                        {testimonial.name}
                      </TextC>
                      <TextC size={12} fontWeight="500" color={theme.colors.textSecondary}>
                        {testimonial.role}
                      </TextC>
                      <View style={styles.testimonialRating}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} color={theme.colors.yellow} size={14} weight="fill" />
                        ))}
                      </View>
                    </View>
                  </View>

                  <TextC size={14} fontWeight="400" color={theme.colors.textSecondary} style={styles.testimonialText}>
                    &quot;{testimonial.text}&quot;
                  </TextC>
                </LinearGradient>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Enhanced CTA Section */}
        <View style={styles.ctaSection}>
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary, theme.colors.accent]}
            style={styles.ctaGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {/* Background Pattern */}
            <View style={styles.ctaPattern}>
              <View style={[styles.patternDot, styles.dot1]} />
              <View style={[styles.patternDot, styles.dot2]} />
              <View style={[styles.patternDot, styles.dot3]} />
            </View>

            <TextC size={28} fontWeight="900" color="#FFFFFF" style={styles.ctaTitle}>
              {t('landing.cta.title')}
            </TextC>

            <TextC size={16} fontWeight="500" color="#FFFFFF" style={styles.ctaSubtitle}>
              {t('landing.cta.subtitle')}
            </TextC>

            <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/sign-up')} activeOpacity={0.9}>
              <LinearGradient colors={['#FFFFFF', '#F8FAFC']} style={styles.ctaButtonGradient}>
                <TextC size={18} fontWeight="700" color={theme.colors.primary}>
                  {t('landing.cta.button')}
                </TextC>
                <ArrowRight color={theme.colors.primary} size={22} />
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Enhanced Footer */}
        <View style={styles.footer}>
          <LinearGradient colors={[theme.colors.surface, theme.colors.background]} style={styles.footerGradient}>
            <TextC size={14} fontWeight="500" color={theme.colors.textSecondary} style={styles.footerText}>
              © 2024 FitFlow. All rights reserved.
            </TextC>
          </LinearGradient>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacingX._20,
    paddingVertical: spacingY._15,
    alignItems: 'center',
  },
  logoGradient: {
    paddingHorizontal: spacingX._25,
    paddingVertical: spacingY._12,
    borderRadius: radius._25,
    ...theme.shadows.md,
  },
  heroSection: {
    marginHorizontal: spacingX._15,
    marginBottom: spacingY._25,
    borderRadius: radius._25,
    overflow: 'hidden',
    ...theme.shadows.lg,
  },
  heroGradient: {
    padding: spacingY._25,
    position: 'relative',
  },
  floatingElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatingCircle: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  circle1: {
    width: 80,
    height: 80,
    top: '10%',
    right: '10%',
  },
  circle2: {
    width: 60,
    height: 60,
    top: '60%',
    left: '5%',
  },
  circle3: {
    width: 40,
    height: 40,
    top: '30%',
    right: '30%',
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTextContainer: {
    alignItems: 'center',
    marginBottom: spacingY._20,
  },
  heroTitle: {
    textAlign: 'center',
    marginBottom: spacingY._12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    textAlign: 'center',
    marginBottom: spacingY._25,
    opacity: 0.95,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: spacingX._15,
    marginBottom: spacingY._25,
  },
  primaryButton: {
    borderRadius: radius._15,
    ...theme.shadows.md,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacingX._25,
    paddingVertical: spacingY._15,
    borderRadius: radius._15,
    gap: spacingX._10,
  },
  secondaryButton: {
    paddingHorizontal: spacingX._25,
    paddingVertical: spacingY._15,
    borderRadius: radius._15,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  heroImageContainer: {
    position: 'relative',
    borderRadius: radius._20,
    overflow: 'hidden',
    ...theme.shadows.lg,
  },
  heroImage: {
    width: SCREEN_WIDTH - 60,
    height: 200,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  section: {
    paddingHorizontal: spacingX._20,
    marginBottom: spacingY._30,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: spacingY._25,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: spacingY._10,
  },
  sectionSubtitle: {
    textAlign: 'center',
    maxWidth: '80%',
  },
  featuresGrid: {
    flexDirection: 'row',
    paddingHorizontal: spacingX._7,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacingY._12,
  },
  featureCard: {
    width: '48%',
    height: 250,
    marginBottom: spacingY._12,
    borderRadius: radius._20,
    overflow: 'hidden',
    ...theme.shadows.md,
  },
  featureGradient: {
    padding: spacingY._20,
    alignItems: 'center',
    minHeight: 180,
  },
  featureIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacingY._15,
  },
  featureTitle: {
    textAlign: 'center',
    marginBottom: spacingY._10,
  },
  featureDescription: {
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    marginHorizontal: spacingX._15,
    marginBottom: spacingY._30,
    borderRadius: radius._25,
    overflow: 'hidden',
    ...theme.shadows.lg,
  },
  statsGradient: {
    padding: spacingY._20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIconContainer: {
    padding: spacingX._15,
    borderRadius: radius._20,
    backgroundColor: theme.colors.card,
    ...theme.shadows.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacingY._10,
  },
  statNumber: {
    marginBottom: spacingY._5,
  },
  statLabel: {
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  testimonialsScroll: {
    marginLeft: -spacingX._20,
    paddingLeft: spacingX._20,
  },
  testimonialCard: {
    width: 300,
    marginRight: spacingX._15,
    borderRadius: radius._20,
    overflow: 'hidden',
    ...theme.shadows.lg,
  },
  testimonialGradient: {
    padding: spacingY._20,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacingY._15,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: spacingX._15,
  },
  testimonialAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  avatarBorder: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  testimonialInfo: {
    flex: 1,
  },
  testimonialRating: {
    flexDirection: 'row',
    gap: 2,
    marginTop: spacingY._5,
  },
  testimonialText: {
    lineHeight: 22,
    fontStyle: 'italic',
  },
  ctaSection: {
    marginHorizontal: spacingX._15,
    marginBottom: spacingY._25,
    borderRadius: radius._25,
    overflow: 'hidden',
    ...theme.shadows.lg,
  },
  ctaGradient: {
    padding: spacingY._30,
    alignItems: 'center',
    position: 'relative',
  },
  ctaPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  patternDot: {
    position: 'absolute',
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  dot1: {
    width: 100,
    height: 100,
    top: '5%',
    left: '10%',
  },
  dot2: {
    width: 80,
    height: 80,
    bottom: '10%',
    right: '15%',
  },
  dot3: {
    width: 60,
    height: 60,
    top: '50%',
    right: '5%',
  },
  ctaTitle: {
    textAlign: 'center',
    marginBottom: spacingY._12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  ctaSubtitle: {
    textAlign: 'center',
    opacity: 0.95,
    marginBottom: spacingY._25,
    maxWidth: '85%',
  },
  ctaButton: {
    borderRadius: radius._20,
    ...theme.shadows.lg,
  },
  ctaButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacingX._30,
    paddingVertical: spacingY._15,
    borderRadius: radius._20,
    gap: spacingX._12,
  },
  footer: {
    marginBottom: spacingY._20,
  },
  footerGradient: {
    paddingVertical: spacingY._20,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
  },
})
