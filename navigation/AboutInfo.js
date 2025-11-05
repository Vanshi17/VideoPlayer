import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  useWindowDimensions,
  Platform,
} from 'react-native';

const AboutInfo = () => {
  const handleLink = (url) => Linking.openURL(url);

  const { width, height } = useWindowDimensions();
  const isTablet = width > 768;
  const isSmallPhone = width < 360;

  // Responsive sizing
  const profileSize = isTablet ? 160 : isSmallPhone ? 90 : 110;
  const nameFont = isTablet ? 26 : isSmallPhone ? 18 : 20;
  const roleFont = isTablet ? 18 : isSmallPhone ? 12 : 14;
  const headingFont = isTablet ? 20 : isSmallPhone ? 14 : 16;
  const textFont = isTablet ? 16 : isSmallPhone ? 12 : 14;
  const buttonWidth = isTablet ? '70%' : '85%';
  const buttonPadding = isTablet ? 16 : 12;

  return (
    <ScrollView
      style={[styles.container, { paddingHorizontal: isTablet ? 24 : 16 }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
          style={[styles.profilePic, { width: profileSize, height: profileSize, borderRadius: profileSize / 2 }]}
        />
        <Text style={[styles.name, { fontSize: nameFont }]}>Vanshika Gupta 💫</Text>
        <Text style={[styles.role, { fontSize: roleFont }]}>Android & React Native Developer</Text>
      </View>

      {/* Bio */}
      <View style={styles.bioSection}>
        <Text style={[styles.heading, { fontSize: headingFont }]}>About Me</Text>
        <Text style={[styles.bioText, { fontSize: textFont, lineHeight: textFont + 6 }]}>
          Passionate about creating seamless mobile experiences using Kotlin, Jetpack Compose, and React Native. I enjoy
          transforming creative ideas into functional, high-performance apps with clean UI and modern design.
        </Text>
      </View>

      {/* Contact Info */}
      <View style={styles.contactSection}>
        <Text style={[styles.heading, { fontSize: headingFont }]}>Connect with Me</Text>

        <TouchableOpacity style={styles.row} onPress={() => handleLink('mailto:vanshikagupta@example.com')}>
          <Text style={[styles.linkText, { fontSize: textFont }]}>vanshikagupta@example.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => handleLink('https://github.com/vanshikagupta')}>
          <Text style={[styles.linkText, { fontSize: textFont }]}>github.com/vanshikagupta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => handleLink('https://www.linkedin.com/in/vanshikagupta')}>
          <Text style={[styles.linkText, { fontSize: textFont }]}>linkedin.com/in/vanshikagupta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => handleLink('https://vanshikagupta.dev')}>
          <Text style={[styles.linkText, { fontSize: textFont }]}>vanshikagupta.dev</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.btn,
            styles.primary,
            { width: buttonWidth, paddingVertical: buttonPadding },
          ]}
          onPress={() => handleLink('https://vanshikagupta.dev')}
        >
          <Text style={[styles.btnText, { fontSize: textFont + 1 }]}>View Portfolio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            styles.outlined,
            { width: buttonWidth, paddingVertical: buttonPadding },
          ]}
          onPress={() => handleLink('mailto:vanshikagupta@example.com')}
        >
          <Text style={[styles.btnText, styles.outlinedText, { fontSize: textFont + 1 }]}>Contact Me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  profilePic: {
    marginBottom: 12,
  },
  name: {
    fontWeight: '700',
    color: '#222',
  },
  role: {
    color: '#777',
    marginTop: 4,
  },
  bioSection: {
    marginTop: 30,
  },
  heading: {
    fontWeight: '600',
    color: '#111',
    marginBottom: 8,
  },
  bioText: {
    color: '#555',
  },
  contactSection: {
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  linkText: {
    marginLeft: 10,
    color: '#333',
  },
  buttons: {
    marginVertical: 30,
    alignItems: 'center',
  },
  btn: {
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
  },
  primary: {
    backgroundColor: '#000',
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#000',
  },
  btnText: {
    fontWeight: '600',
    color: '#fff',
  },
  outlinedText: {
    color: '#000',
  },
});
