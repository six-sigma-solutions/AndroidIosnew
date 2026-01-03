

import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import AutoScrollView from "../../../components/AutoScrollView";
import { useResponsive, getResponsiveImageSize } from "../../../hooks/use-responsive";


const Entrepreneur = () => {
  const router = useRouter();
  const { isTablet, isPhone } = useResponsive();
  return (
    <AutoScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero */}
      <View style={styles.heroSection}>
        <View style={styles.heroBanner}>
          <Text style={[styles.heroBannerText, { fontSize: 25 }]}>Empowering You to Lead, Build and Grow</Text>
        </View>
        <Image
          source={require("../../../assets/headhead.jpg")}
          style={[styles.heroImage, { height: getResponsiveImageSize(isTablet, isPhone, 220) }]}
        />
      </View>

      {/* Rows - Image on top, text below */}
      {[
        {
          image: require("../../../assets/entp1.jpg"),
          bullets: [
            "I want to be my own boss.",
            "Freedom is my first goal, Purpose is my next.",
            "Self-leadership is my success story.",
            "I want to build a life that reflects my values.",
          ],
          bgColor: "#047871",
          textColor: "#fff",
        },
        {
          image: require("../../../assets/entp2.jpg"),
          bullets: [
            "I'm ready to start, build and grow something of my own.",
            "I’m ready to take my first step toward independence.",
            "I’m ready to shape my own success.",
          ],
          bgColor: "#047871",
          textColor: "#ffffffff",
        },
        {
          image: require("../../../assets/entp3.jpg"),
          bullets: [
            "Entrepreneurship is for freedom and financial independence.",
            "I choose independence over comfort.",
            "I’m ready to create my own future.",
            "I’m ready to launch my own vision.",
          ],
          bgColor: "#047871",
          textColor: "#fff",
        },
        {
          image: require("../../../assets/entp4.jpg"),
          bullets: [
            "I'm looking for entrepreneurship to create opportunities.",
            "I’m drawn to entrepreneurship to make opportunities.",
            "I choose entrepreneurship to shape opportunities.",
          ],
          bgColor: "#047871",
          textColor: "#ffffffff",
        },
        {
          image: require("../../../assets/entp5.jpg"),
          bullets: [
            "Yes, I believe in building dreams into reality.",
            "Yes,I turn dreams into reality through my action.",
            "I’m committed to turning vision into reality.",
            "Dreams are meant to be built, not just dreamed.",
          ],
          bgColor: "#047871",
          textColor: "#fff",
        },
        {
          image: require("../../../assets/entp6.jpg"),
          bullets: [
            "I want to lead instead of follow.",
            "I choose to lead rather than follow.",
            "I aim to set the direction,not just follow it.",
            "Leadership is my choice, not conformity.",
          ],
          bgColor: "#047871",
          textColor: "#ffffffff",
        },
        {
          image: require("../../../assets/entp7.jpg"),
          bullets: [
            "I am ready to take a risk for success.",
            "I’m willing to take chances for success.",
            "I’m ready to embrace challenges.",
            "I’m not afraid to take bold steps towards my goal.",
          ],
          bgColor: "#047871",
          textColor: "#ffffffff",
        },
        {
          image: require("../../../assets/entp8.jpg"),
          bullets: [
            "I have dreams of financial independence and impact.",
            "I dream of creating wealth and making a difference.",
            "My goal is to build economic freedom and inspire change.",
            "My vision combines financial success with social impact.",
          ],
          bgColor: "#047871",
          textColor: "#ffffffff",
        },
      ].map((row, index) => (
        <View key={index} style={[styles.row, { backgroundColor: row.bgColor }]}>
          <View
            style={
              index === 0
                ? [styles.entpSpecialWrapper, { height: getResponsiveImageSize(isTablet, isPhone, 420) }]
                : [styles.entpCardImageWrapper, { height: getResponsiveImageSize(isTablet, isPhone, 490) }]
            }
          >
            <Image
              source={row.image}
              style={index === 0 ? styles.entpSpecialImage : styles.entpCardImage}
            />
          </View>
          <View style={styles.textBox}>
            {row.bullets.map((bullet, i) => (
              <View key={i} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 18, marginTop: i === 0 ? 6 : 0 }}>
                <Text style={styles.bulletDot}>●</Text>
                <Text style={[styles.quote, { color: row.textColor, flex: 1, textAlign: 'left', fontWeight: 'bold', fontSize: 20, lineHeight: 32 }]}>{bullet}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* View More Button */}
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() => router.push("/(tabs)/mylife/income")}
      >
        <Text style={[styles.btnText, { fontSize: 16 }]}>View More</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dgay8ba3o/image/upload/v1762702091/dailymoney222_guqvud.png",
          }}
          style={styles.footerLogo}
        />
        <Text style={[styles.footerSubtitle, { fontSize: 16 }]}>Independent for Entire Life</Text>
      </View>
    </AutoScrollView>
  );
};

export default Entrepreneur;

const styles = StyleSheet.create({
  heroBanner: {
    backgroundColor: '#047871',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
  heroBannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  container: { flex: 1, backgroundColor: "#fff" },

  heroSection: {
    alignItems: "center",
    marginVertical: 24,
    paddingHorizontal: 16,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "rebeccapurple",
    textAlign: "center",
    padding: 20,
    marginBottom: 12,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "green",
    resizeMode: "cover",
  },

  row: {
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 12,
    padding: 16,
    borderRadius: 14,
  },

  curvedCardImage: {
    width: "95%",
    height: 420,
    borderTopLeftRadius: 140,
    borderBottomRightRadius: 130,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    resizeMode: "cover",
    marginBottom: 12,
    backgroundColor: '#fff',
    marginTop: 10,
  },

  textBox: {
    width: "100%",
    paddingHorizontal: 15,
  },


  quote: {
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "600",
    textAlign: "center",
  },

  bulletDot: {
    color: '#ffe600',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 2,
    width: 24,
    textAlign: 'center',
  },

  entpCardImageWrapper: {
    width: "100%",
    height: 550,
    backgroundColor: '#047871',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 18,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'contain'
  },
  entpCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  /* Special style for the highlighted entrepreneur image only */
  entpSpecialWrapper: {
    width: "100%",
    backgroundColor: '#047871',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    overflow: 'hidden',
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 12,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  entpSpecialImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  btnPrimary: {
    backgroundColor: "#0b3a55",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    margin: 20,
  },
  btnText: {

    color: "#fff",
    fontWeight: "600",
    fontSize: 16,

  },


  footer: { alignItems: "center", paddingVertical: 30, backgroundColor: '#1f2937' },
  footerLogo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  footerTitle: { fontSize: 20, marginTop: -15, fontWeight: "700", color: "#fffb2c" },
  footerSubtitle: { fontSize: 16, fontWeight: "700", color: "#fffb2c" },
});