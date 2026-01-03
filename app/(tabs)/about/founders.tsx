import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AutoScrollView from '../../../components/AutoScrollView';
import { Link } from 'expo-router';
import { useResponsive, getResponsiveFontSize, getResponsiveImageSize, getResponsivePadding } from "../../../hooks/use-responsive";

const founder = {
  name: "Dr.V.Chellapondy ",
  role: "Founder & CEO",
  image: require('../../../assets/sir.png'), // Fixed path: app/(tabs)/about/ -> ../../../assets/
};

export default function FounderMsg() {
  const { isTablet, isPhone } = useResponsive();
  return (
    <AutoScrollView style={styles.container}>
      <View style={[styles.founderPageSection, { paddingVertical: getResponsivePadding(isTablet, isPhone) * 2, paddingHorizontal: getResponsivePadding(isTablet, isPhone) }] }>
        {/* Main Card */}
        <View style={styles.founderMessageCard}>
          {/* Header Section */}
          <View style={[styles.cardHeaderBg, { paddingVertical: getResponsivePadding(isTablet, isPhone) * 1.2 }] }>
            <Text style={[styles.headerTitle, { fontSize: getResponsiveFontSize(isTablet, 24) }]}>Founder&apos;s Message</Text>
            <Text style={[styles.headerSubtitle, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>A Note on Vision and Commitment</Text>
          </View>

          {/* Founder Profile */}
          <View style={styles.founderProfileArea}>
            <Image source={founder.image} style={[styles.founderImage, { width: getResponsiveImageSize(isTablet, isPhone, 200), height: getResponsiveImageSize(isTablet, isPhone, 200) }]} />
            <Text style={[styles.founderName, { fontSize: getResponsiveFontSize(isTablet, 26) }]}>{founder.name}</Text>
            <Text style={[styles.founderRole, { fontSize: getResponsiveFontSize(isTablet, 20) }]}>{founder.role}</Text>
          </View>
          {/* Life Journey Content */}
          <LinearGradient
            colors={["#0a3c4e", "#0a3c4e", "#ffe066"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1.2 }}
            style={styles.lifeJourneySection}
          >
            <ScrollView
              contentContainerStyle={[styles.lifeJourneyContainer, { paddingHorizontal: getResponsivePadding(isTablet, isPhone) * 1.5, paddingTop: getResponsivePadding(isTablet, isPhone), paddingBottom: getResponsivePadding(isTablet, isPhone) * 2 }]}
              showsVerticalScrollIndicator={false}
            >
              <Text style={[styles.lifeJourneyTitle, { fontSize: getResponsiveFontSize(isTablet, 32) }]}>Life Journey</Text>

              <Text style={[styles.lifeJourneyLede, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
                I'm Chellapondy Vellaiswamy, with over 35 years of experience across
                Media, Finance, and Wellness.
              </Text>

              <Text style={[styles.lifeJourneyParagraph, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
                From launching Kailash Cable Network in 1990 to serving as Deputy
                Director — Distribution at Tamilthirai TV and AVP at India Infoline
                Ltd., I have developed deep expertise in leadership, business growth
                and people development.
              </Text>

              <Text style={[styles.lifeJourneyParagraph, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
                In 2010, I faced the worst health challenge of my life. There was a
                time I feared losing everything — my family, my wife and my children.
                They too were thrown into a difficult and uncertain phase.
              </Text>

              <Text style={[styles.lifeJourneyParagraph, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
                At that moment, I made a decision — to fight back, to rise and to
                reclaim my life. Through determination, discipline and faith, I
                overcame those struggles and rebuilt myself from within.
              </Text>

              <Text style={[styles.lifeJourneyParagraph, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
                Since then, I've dedicated my life to wellness — helping over 100,000 (One Lakh)
                people transform their health and wealth, around the world while
                building an organization of 5,000+ associates. My journey has taken me
                across 15+ countries, expanding my global learning and vision for
                holistic well-being.
              </Text>
              
              <Text style={[styles.lifeJourneynew, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
                Today, I am settled in life. My two children are
                well-settled too. Together, we live a healthy, wealthy,
                happy and heavenly life. And to crown it all, I have
                earned my Doctorate from Global University.
                This moment is a reminder that when passion meets
                persistence, success becomes inevitable.
                </Text>
                <Text style={[styles.lifeJourneyParagraph, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
               I continue to live each day with gratitude, strength, and
               purpose — empowering others to achieve a balanced life
               of health, happiness, and financial freedom.</Text>

              <Text style={[styles.lifeJourneyCloser, { fontSize: getResponsiveFontSize(isTablet, 16), lineHeight: getResponsiveFontSize(isTablet, 24) }] }>
                And through all of this, I've been fulfilling my childhood ambition {'\n'}
                "I want to live after my death". By creating lasting impact, touching
                lives, and inspiring others to live fully — my journey continues
                beyond me.
              </Text>

            </ScrollView>
          </LinearGradient>

          <View style={styles.messageSection}>
            <Image
              source={require('../../../assets/founder2.jpg')}
              style={[styles.messageImage, { height: getResponsiveImageSize(isTablet, isPhone, 560) }]}
            />
          </View>


          {/* View More Button */}
          <View style={styles.viewMoreLinkMyLife}>
            <Link href="/(tabs)/about/president" asChild>
              <TouchableOpacity style={styles.viewMore}>
                <Text style={[styles.viewMoreText, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>View More</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Footer Section */}
          <View style={styles.cardFooterBg}>
            <Image
              source={{  uri: "https://res.cloudinary.com/dgay8ba3o/image/upload/v1762702091/dailymoney222_guqvud.png" }}
              style={styles.footerLogo}
            />
            {/* Optionally add a footer title here if needed */}
            {/* <Text style={[styles.footerTitle2, { fontSize: getResponsiveFontSize(isTablet, 30) }]}>Footer Title</Text> */}
            <Text style={[styles.footerSubtitle2, { fontSize: getResponsiveFontSize(isTablet, 20) }]}>Independent for Entire Life </Text>
          </View>
        </View>
      </View>
    </AutoScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },

  founderPageSection: {
    paddingVertical: 80,
    paddingHorizontal: 16,
    minHeight: '100%',
    backgroundColor: '#f9fafb',
  },

  founderMessageCard: {
    width: "100%",
    alignSelf: 'center',
    backgroundColor: '#047871',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },

  /* Header */
  cardHeaderBg: {
    backgroundColor: '#047871',
    paddingVertical: 48,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#99f6e4',
    textAlign: 'center',
  },

  /* Founder Profile */
  founderProfileArea: {
    alignItems: 'center',
    marginTop: -44,
    paddingHorizontal: 24,
  },
  founderImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    marginTop: 25,
  },

  founderName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginTop: 16,
  },
  founderRole: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: '600',
    color: '#99f6e4',
  },

  /* Message Content */
  messageContent: {
    padding: 10,
    width: "100%",
  },
  messageQuote: {
    color: '#fff',
    marginBottom: 32,
    paddingLeft: 10,
    fontStyle: 'italic',
    textAlign: 'justify',
    justifyContent: "flex-end",
  },
  signature: {
    color: '#00ecd9ff',
    fontSize: 18,
    fontWeight: '600',
  },
  messageSection: {
    marginVertical: 48,
    alignItems: 'center',

  },
  messageImage: {
    width: '95%',
    height: 480,
    objectFit: 'cover',
    resizeMode: 'cover',
  },

  /* View More Button */
  viewMoreLinkMyLife: {
    alignItems: 'center',
    marginBottom: 24,
  },
  viewMore: {
    backgroundColor: '#0b3a55',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  viewMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  /* Footer */
  cardFooterBg: {
    backgroundColor: '#1f2937',
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerLogo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  footerTitle2: {
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#facc15',
    marginTop: -50,
    textTransform: 'uppercase',
  },
  footerSubtitle2: {
    fontSize: 20,
    color: '#fde047',
    marginTop: 4,
  },

  /* Life Journey Styles */
  lifeJourneySection: {
    // Gradient-like blue-green background to match the image
    backgroundColor: '#0a3c4e', // fallback for gradient
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    // If you want a closer match, use a linear gradient component (expo-linear-gradient) for a true gradient
  },
  lifeJourneyContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  lifeJourneyTitle: {
    color: '#d4af37',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.6,
    textAlign: 'center',
    marginBottom: 20,
  },
  lifeJourneyLede: {
    color: '#f3e9c8',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'justify',
  },
  lifeJourneyParagraph: {
    color: '#f3e9c8',
    opacity: 0.95,
    fontSize: 17,
    lineHeight: 22,
    marginBottom: 14,
    textAlign: 'justify',
    fontWeight: '600',
  },
  lifeJourneynew: {
    color: '#d4af37',
    fontSize: 17,
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 14,
    textAlign: 'justify',
    fontWeight: '600',

  },
  lifeJourneyCloser: {
    color: 'yellow',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '600',
  },
});