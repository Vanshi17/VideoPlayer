import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeaderSection = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // sample image
        style={styles.profileImage}
      />

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.username}>Vanshika Gupta</Text>
        <Text style={styles.bio}>
          Android & React Native Developer 💻 | Passionate about creating impactful apps 🚀
        </Text>

        {/* Optional details */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2.3k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>180</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderSection />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginVertical: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    width: '80%',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },
});
