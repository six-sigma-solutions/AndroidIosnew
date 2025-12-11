import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import AutoScrollView from '../components/AutoScrollView';
import Navbar from '../components/Navbar';
import { useRouter } from 'expo-router'; // Or use react-navigation
import { useResponsive, getResponsiveFontSize, getResponsiveImageSize, getResponsivePadding } from "../hooks/use-responsive";

const images = [

    require("../assets/solution1.png"),
    require("../assets/solution2.png"),
    require("../assets/solution3.jpg"),

    
    require("../assets/solution-modified2.jpg"),
];



export default function Solution() {
  const router = useRouter(); // navigation hook
  const { isTablet, isPhone } = useResponsive();

  const handleCtaClick = () => {
    router.push('/gratitude'); // Navigate to Gratitude page
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <AutoScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Image Cards */}
      {images.map((img, index) => (
        <View key={index} style={styles.imageCard}>
          <Image
            source={img}
            style={
              index === 0
                ? [styles.cardImage, styles.cardImageSolution1, { height: getResponsiveImageSize(isTablet, isPhone, 400) }]
                : index === 3
                ? [styles.cardImageModified, { height: getResponsiveImageSize(isTablet, isPhone, 550) }]
                : [styles.cardImage, { height: getResponsiveImageSize(isTablet, isPhone, 550) }]
            }
            resizeMode='stretch'
          />
        </View>
      ))}

      {/* CTA Button */}
      <TouchableOpacity style={[styles.ctaButton, { paddingVertical: getResponsivePadding(isTablet, isPhone), paddingHorizontal: getResponsivePadding(isTablet, isPhone) * 2 }]} onPress={handleCtaClick}>
        <Text style={[styles.ctaButtonText, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>Click to Transform Your Life</Text>
      </TouchableOpacity>

    </AutoScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f9fafb', paddingLeft:10 , paddingRight:10},
  content: { alignItems: 'center',  },

  /* Image Card */
  imageCard: { width: '100%', marginVertical: 30 },
  cardImage: {
    width: '98%',
    height: 430,
    borderRadius: 10,
  },
  cardImageSolution1: {
    height: 300,
  },
  cardImageModified: {
    width: '98%',
    height: 550,
    borderRadius: 20,
    alignSelf: 'center',
  },

  /* CTA Button */
  ctaButton: {
    backgroundColor: '#ffcc00',
    marginBottom:70,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginVertical: 20,
    shadowColor: '#ffcc00',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  ctaButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
});