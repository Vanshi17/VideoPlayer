import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Text, useWindowDimensions, Platform } from 'react-native';
import Video from 'react-native-video';

const videos = [
  {
    id: '1',
    uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Building cool UIs in React Native 💫',
  },
  {
    id: '2',
    uri: 'https://www.w3schools.com/html/movie.mp4',
    description: 'Learning hooks made easy 🔥',
  },
  {
    id: '3',
    uri: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    description: 'Auto-playing videos when visible 🎥',
  },
];

const VideosGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { height, width } = useWindowDimensions();

  const isTablet = width > 768;
  const isSmallPhone = width < 360;

  // Responsiveness: adjust height, text size, spacing
  const videoHeight = isTablet ? height * 0.85 : isSmallPhone ? height * 0.75 : height * 0.8;
  const captionFont = isTablet ? 20 : isSmallPhone ? 13 : 16;
  const captionBottom = isTablet ? 80 : 50;
  const captionPadding = isTablet ? 24 : isSmallPhone ? 12 : 18;

  const viewabilityConfig = { itemVisiblePercentThreshold: 30 };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        pagingEnabled
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.card,
              {
                height: videoHeight,
              },
            ]}
          >
            <Video
              source={{ uri: item.uri }}
              style={styles.video}
              resizeMode="cover"
              repeat
              paused={activeIndex !== index}
            />

            {/* Overlay Caption */}
            <View
              style={[
                styles.overlay,
                {
                  bottom: captionBottom,
                  paddingHorizontal: captionPadding,
                },
              ]}
            >
              <Text
                style={[
                  styles.caption,
                  {
                    fontSize: captionFont,
                    lineHeight: captionFont + 6,
                  },
                ]}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default VideosGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  card: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  caption: {
    color: '#fff',
    fontWeight: Platform.OS === 'ios' ? '600' : '500',
  },
});
