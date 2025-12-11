
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AutoScrollView from "../../../components/AutoScrollView";
import { useRouter } from "expo-router";
import { useResponsive, getResponsiveFontSize, getResponsiveImageSize, getResponsivePadding } from "../../../hooks/use-responsive";


export default function Income() {
  const router = useRouter();
  const { isTablet, isPhone } = useResponsive();

  // Bullet point sections for income page
  const incomeBullets1 = [

    'Income is more than just money earned.',
    'It is the reward for effort, time and value created.',
    'Whether through wages, salaries, profits or investments, income provides the foundation for stability and growth.'
  ];
  const incomeBullets2 = [
    'True income, however, is not just financial.',
    'It is about the returns you gain from life itself — the knowledge you acquire, the relationships you nurture and the health you maintain.'
  ];
  const incomeBullets3 = [
    "Secure your family's future.",
    'Build lasting wealth and assets.',
    'Create the freedom to travel, explore and experience life.',
    'Live with peace of mind and purpose.'
  ];
  const incomeBullets4 = [
    'Income powers growth, not greed.',
    'Energy creates opportunity.',
    'Wealth begins with wisdom.',
    'Freedom follows discipline.',
    'Balance builds true success.'
  ];

  const sections = [
    {
      image: require("../../../assets/income-11.jpg"),
      //text: "Income is more than just money earned, it is the reward for effort, time and value created. Whether through wages, salaries, profits or investments, income provides the foundation for stability and growth.",
    },
    {
      image: require("../../../assets/income-12.jpg"),
      // text: "True income, however is not just financial. It is about the returns you gain from life itself, the knowledge you acquire, the relationships you nurture and the health you maintain.",
    },
    {
      image: require("../../../assets/incomeimg-33.jpg"),
      // text: "Secure your family's future. Build lasting wealth and assets. Create the freedom to travel, explore and experience life. Live with peace of mind and purpose.",
    },
    {
      image: require("../../../assets/income4.png"),
      // text: "Income powers growth, not greed. Energy creates opportunity. Wealth begins with wisdom. Freedom follows discipline. Balance builds true success.",
    },
  ];

  return (
    <AutoScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={[styles.header, { paddingVertical: getResponsivePadding(isTablet, isPhone) }]}>
        <Text style={[styles.headerText, { fontSize: getResponsiveFontSize(isTablet, 26) }]}>Income : The Fuel of Growth </Text>
      </View>


      {/* Sections with bullet points after each image/text */}
      {sections.map((section, index) => {
        // Pick the right bullet array for each section
        let bullets = [];
        if (index === 0) bullets = incomeBullets1;
        else if (index === 1) bullets = incomeBullets2;
        else if (index === 2) bullets = incomeBullets3;
        else if (index === 3) bullets = incomeBullets4;

        return (
          <View
            key={index}
            style={[
              styles.sectionCard,
              { backgroundColor: '#008278', borderRadius: 28, paddingVertical: 24, paddingHorizontal: 0, alignItems: 'center', marginBottom: 32 },
              index === sections.length - 1 && styles.lastSectionCard,
            ]}
          >
            <Image
              source={section.image}
              style={[
                section.image === require("../../../assets/income-12.jpg")
                  ? styles.income12Image
                  : styles.image,
                {
                  height: getResponsiveImageSize(isTablet, isPhone, section.image === require("../../../assets/income-12.jpg") ? 600 : 750),
                  width: "95%",
                  borderRadius: 70,
                  marginBottom: 18,
                  marginTop: 0,
                  alignSelf: 'center',
                  resizeMode: 'cover',
                },
              ]}
            />
            {/* Only bullet points below image, no extra text */}
            <View style={{ width: '100%', marginTop: 0, marginBottom: 0, paddingHorizontal: 18 }}>
              {bullets.map((bullet, i) => (
                <View key={i} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 18 }}>
                  <Text style={{
                    color: '#ffe600',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginRight: 10,
                    marginTop: 2,
                    width: 24,
                    textAlign: 'center',
                  }}>●</Text>
                  <Text style={{ color: '#fff', flex: 1, textAlign: 'left', fontWeight: 'bold', fontSize: 20, lineHeight: 32 }}>{bullet}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}

      {/* View More Button */}
      <View style={styles.viewMoreWrap}>
        <TouchableOpacity
          style={styles.viewMoreBtn}
          onPress={() => router.push("/(tabs)/mylife/womenempowerment")}
        >
          <Text style={[styles.viewMoreText, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>View More</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={{ uri: "https://res.cloudinary.com/dgay8ba3o/image/upload/v1762702091/dailymoney222_guqvud.png" }}
          style={styles.footerLogo}
        />
        <Text style={[styles.footerSubtitle, { fontSize: getResponsiveFontSize(isTablet, 16) }]}>Independent for Entire Life</Text>
      </View>
    </AutoScrollView>
  );
}

const styles = StyleSheet.create({
  income12Image: {
    width: 320,
    height: 320,
    overflow: "hidden",
    marginBottom: 15,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 150,
    backgroundColor: "#fff",
    alignSelf: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  lastSectionCard: {
    backgroundColor: '#008278',
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingBottom: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  lastImage: {
    width: 320,
    height: 320,
    overflow: "hidden",
    marginBottom: 15,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 150,
    backgroundColor: "#fff",
    alignSelf: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },

  },
  container: { flex: 1, backgroundColor: "#fafafa" },
  header: { backgroundColor: "#047871", paddingVertical: 20, alignItems: "center", },
  headerText: { color: "#fff", fontSize: 26, fontWeight: "700", textAlign: "center", padding: 10 },
  sectionCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingBottom: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: 32,
    height: 10,
    overflow: "hidden",
    marginBottom: 15,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 150,
    backgroundColor: "#fff",
    alignSelf: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  incomeBulletDot: {
    color: '#21807a',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 6,
    width: 18,
    textAlign: 'center',
  },
  incomeBulletText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
    flex: 1,
    textAlign: 'left',
    fontFamily: 'System',
  },
  textBox: { padding: 16 },
  text: { fontSize: 17, lineHeight: 25, textAlign: "justify", fontWeight: "700", color: "#333" },
  viewMoreWrap: { alignItems: "center", marginVertical: 30 },
  viewMoreBtn: {
    backgroundColor: "#0b3a55",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  viewMoreText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  footer: { alignItems: "center", paddingVertical: 30, backgroundColor: '#1f2937' },
  footerLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  footerTitle: { fontSize: 20, fontWeight: "700", color: "#fffb2c", marginTop: -15 },
  footerSubtitle: { fontSize: 16, fontWeight: "700", color: "#fffb2c" },
});