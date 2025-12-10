import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import AutoScrollView from "../../../components/AutoScrollView";
import { useRouter } from "expo-router";
import {
  useResponsive,
  getResponsiveFontSize,
  getResponsiveImageSize,
  getResponsivePadding,
} from "../../../hooks/use-responsive";

export default function Elder() {
  const router = useRouter();
  const { isTablet, isPhone } = useResponsive();

  // Animation
  const animValues = useRef(
    [...Array(4)].map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    animValues.forEach((val, idx) => {
      Animated.timing(val, {
        toValue: 1,
        duration: 800,
        delay: idx * 300,
        useNativeDriver: true,
      }).start();
    });
  }, [animValues]);

  // 🔹 Elder Bullet Sections
  const elderBullets1 = [
    "DM represents a rebirth – a movement where elders become independent,earn daily, share wisdom and feel valuable again.",
    "Live with financial confidence",
    "Feel value and included",
    "Share your wisdom, not your worries.",
    "Enjoy peace, purpose and pride in your DM life.",
  ];

  const elderBullets2 = [
    "Empowerment begins with a choice.",
    "Choose to live with abundance, not dependence.",
    "Your experience is your greatest asset we help you turn it into income.",
    "Invest in your health, reclaim wealth and cherish your family.",
    "That's the DM way.",
  ];

  const elderBullets3 = [
    "Retirement means enjoying inner peace on your own terms.",
    "It's not the end - it is the start of living life on your own schedule.",
    "That's the DM way.",
    "Freedom with purpose and dignity at every stage of life.",
  ];

  const elderBullets4 = [
    "When elders thrive, families become stronger.",
    "When their voices are valued, communities become wiser.",
    "When they live confidently, society grows richer in humanity.",
    "That's the DM way - where every generation learns and lives with purpose",
  ];

  // 🔹 Elder Images
  const sections = [
    { img: require("../../../assets/ef1.jpg") },
    { img: require("../../../assets/elder2.jpg") },
    { img: require("../../../assets/elder3.jpg") },
    { img: require("../../../assets/elder4.png") },
  ];

  return (
    <AutoScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <View
        style={[
          styles.header,
          {
            paddingHorizontal: getResponsivePadding(isTablet, isPhone),
            marginVertical: getResponsivePadding(isTablet, isPhone),
          },
        ]}
      >
        <Text
          style={[
            styles.headerText,
            {
              fontSize: getResponsiveFontSize(isTablet, 26),
              padding: getResponsivePadding(isTablet, isPhone),
            },
          ]}
        >
          DM Empower Elders
        </Text>
      </View>

      {/* SECTIONS */}
      {sections.map((section, index) => {
        let bullets = [];
        if (index === 0) bullets = elderBullets1;
        else if (index === 1) bullets = elderBullets2;
        else if (index === 2) bullets = elderBullets3;
        else if (index === 3) bullets = elderBullets4;

        return (
          <Animated.View
            key={index}
            style={[
              styles.card,
              { padding: getResponsivePadding(isTablet, isPhone) },
              {
                opacity: animValues[index],
                transform: [
                  {
                    translateY: animValues[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {/* IMAGE */}
            <View style={styles.imageWrapper}>
              <Image
                source={section.img}
                style={[
                  styles.image,
                  {
                    height: getResponsiveImageSize(
                      isTablet,
                      isPhone,
                      570
                    ),
                  },
                ]}
                resizeMode="stretch"
              />

              {/* BULLETS */}
              <View style={{ width: "100%", marginTop: 12, marginBottom: 12 }}>
                {bullets.map((bullet, i) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      marginBottom: 18,
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffe600",
                        fontSize: 20,
                        fontWeight: "bold",
                        marginRight: 10,
                        marginTop: 2,
                        width: 24,
                        textAlign: "center",
                      }}
                    >
                      ●
                    </Text>

                    <Text
                      style={{
                        color: "#fff",
                        flex: 1,
                        fontWeight: "bold",
                        fontSize: 20,
                        textAlign: "left",
                        lineHeight: 32,
                      }}
                    >
                      {bullet}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

          </Animated.View>
        );
      })}

      {/* VIEW MORE BUTTON */}
      <View style={styles.viewMoreWrap}>
        <TouchableOpacity
          style={styles.viewMoreBtn}
          onPress={() => router.push("/(tabs)/about/overview")}
        >
          <Text
            style={[
              styles.viewMoreText,
              { fontSize: getResponsiveFontSize(isTablet, 16) },
            ]}
          >
            View More
          </Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dgay8ba3o/image/upload/v1762702091/dailymoney222_guqvud.png",
          }}
          style={styles.footerLogo}
        />
        <Text
          style={[
            styles.footerSubtitle,
            { fontSize: getResponsiveFontSize(isTablet, 16) },
          ]}
        >
          Independent for Entire Life
        </Text>
      </View>

    </AutoScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fafafa" },

  header: {
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#047871",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontSize: 26,
    padding: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  },

  card: {
    backgroundColor: "#008278",
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 13,
    alignItems: "center",
  },

  imageWrapper: { width: "100%", alignItems: "center", marginBottom: 18 },

  image: {
    width: "100%",
    height: 500,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 93,
  },

  viewMoreWrap: { alignItems: "center", marginVertical: 30 },

  viewMoreBtn: {
    backgroundColor: "#0b3a55",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },

  viewMoreText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  footer: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#1f2937",
  },

  footerLogo: { width: 100, height: 60, resizeMode: "contain", marginBottom: 10 },

  footerSubtitle: { fontSize: 16, fontWeight: "700", color: "#fffb2c" },
});
