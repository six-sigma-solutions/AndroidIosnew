import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ImageSourcePropType,
} from "react-native";
import AutoScrollView from '../../../components/AutoScrollView';
import { useRouter } from "expo-router";
import { useResponsive, getResponsiveFontSize, getResponsiveImageSize, getResponsivePadding } from "../../../hooks/use-responsive";

interface VisionSection {
  img: ImageSourcePropType;
  points: string[];
}

const Visionmission: React.FC = () => {
  const router = useRouter();
  const { isTablet, isPhone } = useResponsive();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 520,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 520,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateYAnim]);

  const sections: VisionSection[] = [
    {
      img: require("../../../assets/vision11.jpg"),
      points: [
        "Transforming the way the world lives healthier in body, happier in heart and richer in spirit.",
        "To inspire a world where well being, joy and prosperity thrive together.",
      ],
    },
    {
      img: require("../../../assets/vision222.jpg"),
      points: [
        "To nurture global wellness and wealth through mindful living and empowered growth.",
        "To harmonize body, mind and prosperity through conscious, nature powered living.",
      ],
    },
    {
      img: require("../../../assets/vision3.jpg"),
      points: [
        "A world of harmony where health, happiness and wealth coexist in balance.",
        "To redefine success by aligning well being, joy, happiness and financial growth.",
      ],
    },
    {
      img: require("../../../assets/vision4.jpg"),
      points: [
        "To create a global movement that connects wellbeing with wealth building for a better tomorrow.",
        "Empower every individual to live healthier, happier and more abundant lives through balance and purpose.",
      ],
    },
  ];

  const galleryImages: ImageSourcePropType[] = [
    require("../../../assets/test1a.png"),
    require("../../../assets/test22.png"),
    require("../../../assets/test3.png"),
    require("../../../assets/test4.jpg"),
  ];

  // arrow animations per gallery item (avoid calling hooks inside map)
  const arrowAnims = useRef(galleryImages.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    arrowAnims.forEach((anim) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, { toValue: 15, duration: 800, useNativeDriver: true }),
          Animated.timing(anim, { toValue: -15, duration: 800, useNativeDriver: true }),
        ])
      ).start();
    });
  }, [arrowAnims]);

  return (
    <AutoScrollView style={styles.container}>
      {/* Title */}
      <Text style={[styles.title, { fontSize: getResponsiveFontSize(isTablet, 28), padding: getResponsivePadding(isTablet, isPhone), marginVertical: getResponsivePadding(isTablet, isPhone) }]}>Our Core Values to Global</Text>

      {/* Hero Section */}
      <View style={styles.heroCard}>
        <Image
          source={require("../../../assets/vision1.jpg")}
          style={[styles.heroImage, { height: getResponsiveImageSize(isTablet, isPhone, 500) }]}
          resizeMode="cover"
        />
        <Animated.View
          style={[
            styles.heroOverlay,
            {
              opacity: fadeAnim,
              transform: [{ translateY: translateYAnim }],
            },
          ]}
        >
          <Text style={[styles.heroHeading, { fontSize: getResponsiveFontSize(isTablet, 20) }]}>
            Improving the world&apos;s health, happiness and prosperity{"\n"}deliver
            with precision.
          </Text>
<View style={{ marginTop: 10 }}>
  <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 10 }}>
    <Text style={styles.tick}>●</Text>
    <Text style={styles.pointTexthero}>
      A brighter world healthy in spirit, joyful in living and abundant in growth.
    </Text>
  </View>

  <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 10 }}>
    <Text style={styles.tick}>●</Text>
    <Text style={styles.pointTexthero}>
      Living in flow with nature where wellness nourishes wealth and joy sustains growth.
    </Text>
  </View>

  <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 10 }}>
    <Text style={styles.tick}>●</Text>
    <Text style={styles.pointTexthero}>
      Building a future where vitality, happiness and financial independence flow as one.
    </Text>
  </View>

  <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
    <Text style={styles.tick}>●</Text>
    <Text style={styles.pointTexthero}>
      To enrich every life with balance, energy and prosperity.
    </Text>
  </View>
</View>

        </Animated.View>
      </View>

      {/* Vision Sections - Image Top, Text Bottom */}
      {sections.map((section, index) => (
        <View key={index} style={styles.visionBlock}>
          {/* Image on Top */}
          <Image source={section.img} style={[styles.sectionImage, { height: getResponsiveImageSize(isTablet, isPhone, 180) }]} resizeMode="cover" />

          {/* Text Below */}
          <View style={styles.visionText}>
            {section.points.map((point, i) => (
              <View key={i} style={styles.visionPoint}>
                <Text style={[styles.tick, {
                
                  color: "black",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginRight: 15,
                  marginTop: 2,
                  width: 24,
                  textAlign: "center",
                }]}>●</Text>
                <Text style={[styles.pointText, {

                  flex: 1,
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "left",
                  lineHeight: 32,
                }]}>{point}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* 4-Image Gallery */}
      <View style={styles.gallerySection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.galleryContainer}
        >
          {galleryImages.map((img, idx) => (
            <View key={idx} style={styles.galleryItem}>
              <View style={[styles.galleryImageWrapper, { height: getResponsiveImageSize(isTablet, isPhone, 480), width: getResponsiveImageSize(isTablet, isPhone, 320) }]}>
                <Image source={img} style={styles.galleryImage} resizeMode="cover" />
              </View>
              <Animated.Text
                style={[
                  styles.arrow,
                  { fontSize: getResponsiveFontSize(isTablet, 60), transform: [{ translateX: arrowAnims[idx] }] },
                ]}
              >
                →
              </Animated.Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Button Section */}
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push("/solution")}
        >
          <Text style={[styles.actionText, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>Solution</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dgay8ba3o/image/upload/v1762702091/dailymoney222_guqvud.png",
          }}
          style={styles.footerLogo}
        />
        {/* Optionally add a footer title here if needed */}
        {/* <Text style={[styles.footerTitle, { fontSize: getResponsiveFontSize(isTablet, 20) }]}>Footer Title</Text> */}
        <Text style={[styles.footerSubtitle, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>Independent for Entire Life</Text>
      </View>
    </AutoScrollView>
  );
};

export default Visionmission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    padding: 20,
    fontWeight: "900",
    color: "#fff",
    marginVertical: 20,
    backgroundColor: '#047871',
    width: '93%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  heroCard: {
    position: "relative",
    marginHorizontal: 10,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    
  },
  heroImage: {
    width: "100%",
    
   
    
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  heroHeading: {
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },
  heroParagraph: {
    color: "#ddd",
    fontWeight: "600",
  },
  pointTexthero: {
  flex: 1,
    color: "#ddd",
  fontWeight: "500",
  fontSize: 15,
    textAlign: "justify",
},

  tick: {
  color: "#ddd",
  fontWeight: "500",
  marginRight: 5,
  marginTop: 1,
  width: 10,
},

pointText: {
  flex: 1,
  fontWeight: "bold",
  textAlign: "left",
},

  visionBlock: {
    marginVertical: 30,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  sectionImage: {
    width: "100%",
    
    borderRadius: 16,
    marginBottom: 15,
    // height removed: use responsive inline height with getResponsiveImageSize
    resizeMode: "contain",
    marginLeft: 20,
    marginRight: 20,
  },
  visionText: {
    width: "98%",
  },
  visionPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
 
  gallerySection: {
    alignItems: "center",
    paddingVertical: 30,

  },

  galleryItem: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  galleryImageWrapper: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#eee",
  },

  arrow: {
    color: "#0cf938ff",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  galleryTitle: {
    fontWeight: "800",
    color: "#f10a0a",
    marginBottom: 20,
  },
  galleryContainer: {
    flexDirection: "row",
    gap: 15,
    paddingLeft: 75,
    paddingRight: 75,
    paddingHorizontal: 10,
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    // image will be clipped by wrapper's borderRadius
  },
  buttonSection: {
    alignItems: "center",
    marginVertical: 30,
  },
  actionButton: {
    backgroundColor: "#f10a0a",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: "#f10a0a",
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
  },


  footer: { alignItems: "center", paddingVertical: 30, backgroundColor: '#1f2937' },
  footerLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  footerTitle: { fontWeight: "700", color: "#fffb2c", marginTop: -15 },
  footerSubtitle: { fontWeight: "700", color: "#fffb2c" },
});
