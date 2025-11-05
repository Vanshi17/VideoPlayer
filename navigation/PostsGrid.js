import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from 'react-native';

const posts = [
  {
    id: '1',
    user: 'Vanshika Gupta 💫',
    profilePic: 'https://i.pravatar.cc/100?img=11',
    time: '2 hrs ago',
    image: 'https://picsum.photos/400/400?random=1',
    caption: 'Exploring new ideas 💡 #ReactNative #AndroidDev',
  },
  {
    id: '2',
    user: 'Rahul Sharma',
    profilePic: 'https://i.pravatar.cc/100?img=22',
    time: '5 hrs ago',
    image: 'https://picsum.photos/400/400?random=2',
    caption: 'Weekend vibes 🌸 #coding #coffee',
  },
  {
    id: '3',
    user: 'Anjali Singh',
    profilePic: 'https://i.pravatar.cc/100?img=33',
    time: '1 day ago',
    image: 'https://picsum.photos/400/400?random=3',
    caption: 'Designing my dream app 🧠💻 #UIUX #ReactNative',
  },
  {
    id: '4',
    user: 'Vanshika Gupta 💫',
    profilePic: 'https://i.pravatar.cc/100?img=12',
    time: '3 days ago',
    image: 'https://picsum.photos/400/400?random=4',
    caption: 'Nothing better than clean code ✨',
  },
];

const PostsGrid = () => {
  const { width, height } = useWindowDimensions();

  // Responsive calculations
  const isTablet = width > 768;
  const isSmallPhone = width < 360;

  const profilePicSize = isTablet ? 60 : isSmallPhone ? 35 : 45;
  const imageHeight = isTablet ? 500 : isSmallPhone ? 280 : 350;
  const fontSizeUsername = isTablet ? 18 : isSmallPhone ? 13 : 15;
  const fontSizeCaption = isTablet ? 16 : isSmallPhone ? 12 : 14;
  const padding = isTablet ? 16 : isSmallPhone ? 8 : 12;

  return (
    <View style={[styles.container, { paddingVertical: padding / 2 }]}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              {
                marginBottom: padding,
                borderRadius: isTablet ? 14 : 10,
                elevation: isTablet ? 4 : 2,
              },
            ]}
          >
            {/* Header Section */}
            <View style={[styles.header, { padding }]}>
              <View style={styles.profileRow}>
                <Image
                  source={{ uri: item.profilePic }}
                  style={{
                    width: profilePicSize,
                    height: profilePicSize,
                    borderRadius: profilePicSize / 2,
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text style={[styles.username, { fontSize: fontSizeUsername }]}>
                    {item.user}
                  </Text>
                  <Text style={[styles.time, { fontSize: fontSizeCaption - 2 }]}>
                    {item.time}
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={[styles.more, { fontSize: isTablet ? 26 : 20 }]}>⋯</Text>
              </TouchableOpacity>
            </View>

            {/* Post Image */}
            <Image
              source={{ uri: item.image }}
              style={[styles.postImage, { height: imageHeight }]}
              resizeMode="cover"
            />

            {/* Caption Section */}
            <View style={[styles.captionBox, { padding }]}>
              <Text style={[styles.caption, { fontSize: fontSizeCaption }]}>
                <Text style={[styles.username, { fontSize: fontSizeCaption, fontWeight: '700' }]}>
                  {item.user}{' '}
                </Text>
                {item.caption}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostsGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: '600',
    color: '#222',
  },
  time: {
    color: '#777',
  },
  more: {
    color: '#333',
    paddingHorizontal: 5,
  },
  postImage: {
    width: '100%',
  },
  captionBox: {
    paddingTop: 6,
  },
  caption: {
    color: '#222',
    lineHeight: 20,
  },
});
