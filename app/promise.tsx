import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AutoScrollView from "../components/AutoScrollView";
import Navbar from "../components/Navbar";
import { useRouter } from "expo-router";
import { useResponsive, getResponsiveImageSize } from "../hooks/use-responsive";

const Mypromises = () => {
  const router = useRouter();
  const { isTablet, isPhone } = useResponsive();

  const handleCtaClick = () => {
    router.push('/bio'); // Navigate to Gratitude page
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <AutoScrollView contentContainerStyle={styles.container}>
        <View style={styles.wrapper}>
          {/* Responsive Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/promise1.png")}
              style={styles.fullImage}
              resizeMode="cover"
            />
          </View>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={handleCtaClick}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </AutoScrollView>
    </View>
  );
};

export default Mypromises;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#08143aff',
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  //  position: "relative",
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 0.7, // Adjust as needed for your image
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: '#000',
  },
  fullImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  button: {
   // position: "absolute",
    bottom: 60,
    backgroundColor: "#ffcc00",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    marginTop: 90,

  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

});