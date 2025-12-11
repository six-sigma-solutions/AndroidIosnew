// Bio.tsx
import React, { useMemo, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';

import AutoScrollView from '../components/AutoScrollView';
import Navbar from '../components/Navbar';
import { useRouter } from 'expo-router';

const NAVY = '#000080';

// ---------------------- DATA ----------------------

type Member = {
  name: string;
  image: any;
  slogan: string;
  link: string;
};

const founder = {
  name: 'Dr.V.Chellapondy',
  image: require("../assets/sir.png"),
  link: '/cpcontact',
  slogan: "My job is - changing people's life.",
};

const members: Member[] = [
  { name: 'S.Vasu', image: require("../assets/vasu.jpg"), slogan: 'My Health is My Wealth.', link: '/vasucontact' },
  { name: 'R.K.Selvamani', image: require("../assets/person23.jpg"), slogan: 'My World - My Children.', link: '/selvamanicon' },
  { name: 'C.Arvind', image: require("../assets/aravind.jpg"), slogan: 'I want to became Entrepreneur.', link: '/arvind' },
  { name: 'Dr.K.P.Kosygan', image: require("../assets/kosy.jpg"), slogan: "I'm Forever a Student.", link: '/kosygan' },
  { name: 'Jeganraj A', image: require("../assets/jega2.png"), slogan: 'Healthy living happy living.', link: '/jegan' },
  { name: 'Dhanush A V', image: require("../assets/dhanush.jpg"), slogan: 'My Healthy weight loss journey starts Now.', link: '/dhanush' },
  { name: 'Kishore K', image: require("../assets/kisore.jpg"), slogan: 'Slim, Fit, and full of Energy.', link: '/kirhore' },
  { name: 'Ilayaraju C', image: require("../assets/raju.jpg"), slogan: 'Choosing health and happiness every day.', link: '/ilaya' },

  // Placeholder members
  { name: 'X X X X', image: { uri: 'https://placehold.co/100x100/EEE/888?text=Member' }, slogan: 'My wellness journey begins Now.', link: '/contact' },
  { name: 'X X X X', image: { uri: 'https://placehold.co/100x100/EEE/888?text=Member' }, slogan: 'My wellness journey begins Now.', link: '/contact' },
  { name: 'X X X X', image: { uri: 'https://placehold.co/100x100/EEE/888?text=Member' }, slogan: 'My wellness journey begins Now.', link: '/contact' },
  { name: 'X X X X', image: { uri: 'https://placehold.co/100x100/EEE/888?text=Member' }, slogan: 'My wellness journey begins Now.', link: '/contact' },
];

// ---------------------- ICON ----------------------

function PointingIcon() {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(translateY, { toValue: 5, duration: 600, useNativeDriver: true }),
          Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(translateY, { toValue: 0, duration: 600, useNativeDriver: true }),
          Animated.timing(opacity, { toValue: 0.7, duration: 600, useNativeDriver: true }),
        ]),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);

  return (
    <Animated.Text
      style={[styles.pointingIcon, { transform: [{ translateY }], opacity }]}
    >
      👆
    </Animated.Text>
  );
}

// ---------------------- TEAM CARD ----------------------

function TeamCard({ member }: { member: Member }) {
  const scale = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  const onPressIn = () => {
    Animated.spring(scale, { toValue: 1.03, useNativeDriver: true }).start();
  };
  const onPressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
      <View style={styles.profileRow}>
        <Image source={member.image} style={styles.avatar} />
        <Text style={styles.memberName}>{member.name}</Text>
      </View>

      <Pressable
        onPress={() => router.push(member.link)}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styles.linkArea}
        android_ripple={{ color: "rgba(255,255,255,0.15)" }}
      >
        <Text style={styles.sloganText}>{member.slogan}</Text>
        <PointingIcon />
      </Pressable>
    </Animated.View>
  );
}

// ---------------------- MAIN COMPONENT ----------------------

export default function Bio() {
  const { width } = Dimensions.get('window');
  const isTablet = width <= 992 && width > 768;
  const isMobile = width <= 768;
  const isTiny = width <= 480;

  const containerPad = useMemo(() => (isTiny ? 10 : 20), [isTiny]);

  const router = useRouter();
  const openFounder = () => router.push('/cpcontact');

  return (
    <View style={styles.safe}>
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>

      <AutoScrollView
        contentContainerStyle={[styles.page, { padding: containerPad, paddingTop: 0 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.headerWrap}>
          <Text
            style={[
              styles.headerText,
              isMobile && { fontSize: 15, marginHorizontal: 9, paddingVertical: 25 },
              isTablet && { marginHorizontal: 40 },
            ]}
          >
            Choose your Path, Travel with us, Lead a Healthy-Happy-Wealthy-Heaven Life.
          </Text>
        </View>

        {/* FOUNDER SECTION */}
        <View style={styles.founderSection}>
          <View
            style={[
              styles.founderProfile,
              isMobile && { flexDirection: "column", gap: 10 },
            ]}
          >
            <Image source={founder.image} style={styles.founderAvatar} />
            <Text style={[styles.founderName, isMobile && { fontSize: 28 }]}>
              {founder.name}
            </Text>
          </View>

          <View style={styles.hr} />

          <Pressable onPress={openFounder} style={styles.founderLink}>
            <Text style={[styles.founderSlogan, isMobile && { fontSize: 18 }]}>
              {founder.slogan}
            </Text>
            <PointingIcon />
          </Pressable>
        </View>

        {/* TEAM GRID */}
        <View
          style={[
            styles.teamWrap,
            isTablet && { gap: 25 },
            isMobile && { gap: 20 },
          ]}
        >
          {members.map((m, idx) => (
            <TeamCard member={m} key={`${m.name}-${idx}`} />
          ))}
        </View>

        {/* FOOTER */}
        <View style={styles.footerCard}>
          <View style={styles.footerLogoWrap}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dgay8ba3o/image/upload/v1762702091/dailymoney222_guqvud.png",
              }}
              style={styles.footerLogo}
            />
          </View>
          <Text style={styles.footerTitle}></Text>
          <Text style={styles.footerSubtitle}>Independent for Entire Life</Text>
        </View>
      </AutoScrollView>
    </View>
  );
}

// ---------------------- SHADOW FIX ----------------------

const cardShadow =
  Platform.OS === "ios"
    ? {
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 12,
      }
    : {
        elevation: 6,
      };

// ---------------------- STYLES ----------------------

const styles = StyleSheet.create({
  safe: { flex: 1 },
  navbarContainer: { marginTop: 0, paddingTop: 0 },

  page: { gap: 16 },

  headerWrap: { alignItems: "center", marginTop: 10, marginBottom: 20 },

  headerText: {
    color: "rgb(1,255,1)",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#040464",
    borderRadius: 5,
    marginHorizontal: 190,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontWeight: "600",
  },

  founderSection: { alignItems: "center", marginBottom: 30 },

  founderProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  founderAvatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#fff",
    ...cardShadow,
  },

  founderName: {
    fontSize: 32,
    color: "#333",
    fontWeight: "700",
  },

  hr: {
    width: "60%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },

  founderLink: { position: "relative", paddingBottom: 35, alignItems: "center" },

  founderSlogan: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#fff",
    backgroundColor: NAVY,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 5,
    textAlign: "center",
  },

  teamWrap: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 40,
  },

  card: {
    backgroundColor: "#fff",
    paddingTop: 25,
    paddingHorizontal: 25,
    paddingBottom: 70,
    borderRadius: 10,
    maxWidth: 420,
    width: "90%",
    position: "relative",
    ...cardShadow,
  },

  profileRow: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 15,
  },

  avatar: { width: 100, height: 100, borderRadius: 50 },

  memberName: {
    fontSize: 24,
    color: "#333",
    fontWeight: "700",
    textAlign: "center",
  },

  linkArea: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 25,
    alignItems: "center",
  },

  sloganText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    backgroundColor: NAVY,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    textAlign: "center",
    fontStyle: "italic",
  },

  pointingIcon: {
    position: "absolute",
    bottom: -9,
    fontSize: 22,
    alignSelf: "center",
  },

  footerCard: {
    marginTop: 24,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#1f2937",
    marginBottom: 40,
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 16,
    width: "92%",
    ...cardShadow,
  },

  footerLogoWrap: { width: 120, height: 50, marginBottom: 8 },

  footerLogo: { width: 100, height: 60, resizeMode: "contain" },

  footerTitle: { fontSize: 20, fontWeight: "700", color: "#fffb2c" },

  footerSubtitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fffb2c",
  },
});

