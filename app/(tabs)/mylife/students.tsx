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

export default function Students() {
  const router = useRouter();
  const { isTablet, isPhone } = useResponsive();

  // Animation refs for sections
  const animValues = useRef([...Array(4)].map(() => new Animated.Value(0))).current;

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

  // Bullet point sections
  const studentBullets1 = [

    "Our future starts with today’s discipline.",
    "We help turn student loans into student gains.",
    "Your degree gets you a job, but your DM skills get you freedom.",
    "Build wealth while you learn — don’t just chase grades, chase growth.",
  ];

  const studentBullets2 = [
    "Learn to earn while you still have time.",
    "Our side hustle becomes your main opportunity.",
    "Financial confidence is the best graduation gift.",
    "DM delivers a blueprint for students to design their future.",
    "We train you for real-world success.",

  ];

  const studentBullets3 = [
    "Achieve personal growth and financial independence.",
    "Pay off student debt through your own earned income.",
    "Financial independence builds confidence and self-respect.",
  ];

  const studentBullets4 = [
    "DM empowers you to learn with purpose and earn with confidence.",
    "Earn with pride, learn with purpose.",
    "Students earn and the world learns the value of determination.",
    "Self-earned income builds more than wealth — it builds wisdom.",
  ];

  // Student sections
  const sections = [
    {
      img: require("../../../assets/student-1.png"),
    },
    {
      img: require("../../../assets/student-2.png"),

    },
    {
      img: require("../../../assets/student-3.jpg"),

    },
    {
      img: require("../../../assets/student-4.jpg"),

    },
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
          DM Empower Students
        </Text>
      </View>

      {/* STUDENT SECTIONS */}
      {sections.map((section, index) => {
        // Assign bullets per section
        let bullets = [];
        if (index === 0) bullets = studentBullets1;
        else if (index === 1) bullets = studentBullets2;
        else if (index === 2) bullets = studentBullets3;
        else if (index === 3) bullets = studentBullets4;

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
                      index === 1 ? 420 : 540
                    ),
                  },
                  index === 1 && styles.imageShort,
                ]}
                resizeMode="stretch"
              />

              {/* BULLET POINTS */}
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
                        color: '#ffe600',
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginRight: 10,
                        marginTop: 2,
                        width: 24,
                        textAlign: 'center',
                      }}
                    >
                      ●
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        flex: 1, textAlign: 'left', fontWeight: 'bold', fontSize: 20, lineHeight: 32,
                      }}
                    >
                      {bullet}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* TEXT CONTENT */}
            <Text
              style={[
                styles.text,
                {
                  fontSize: getResponsiveFontSize(isTablet, 17),
                  lineHeight: getResponsiveFontSize(isTablet, 27),
                },
              ]}
            >

            </Text>
          </Animated.View>
        );
      })}

      {/* VIEW MORE */}
      <View style={styles.viewMoreWrap}>
        <TouchableOpacity
          style={styles.viewMoreBtn}
          onPress={() => router.push("/(tabs)/mylife/elder")}
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
        <Text style={[styles.footerSubtitle, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>
          Independent for Entire Life
        </Text>
      </View>
    </AutoScrollView>
  );
}

// =============================
//       STYLES
// =============================
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
    backgroundColor: '#008278',
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 13,
    alignItems: "center",
  },

  imageWrapper: { width: "100%", alignItems: "center", marginBottom: 18 },

  image: {
    width: "100%",
    height: 440,
    
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    
  },
  imageShort: {
    height: 420,
    
  },

  text: {
    fontSize: 17,
    lineHeight: 27,
    textAlign: "justify",
    fontWeight: "600",
    color: "#0f172a",
  },

  viewMoreWrap: { alignItems: "center", marginVertical: 30 },
  viewMoreBtn: {
    backgroundColor: "#0b3a55",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  viewMoreText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  footer: { alignItems: "center", paddingVertical: 30, backgroundColor: "#1f2937" },
  footerLogo: { width: 100, height: 60, resizeMode: "contain", marginBottom: 10 },
  footerSubtitle: { fontSize: 16, fontWeight: "700", color: "#fffb2c" },
});
