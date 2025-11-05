import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
  Platform,
} from 'react-native';

const taggedPhotos = [
  {
    id: '1',
    photo: 'https://picsum.photos/600/600?random=11',
    taggedBy: 'rahul_sharma',
    taggedByPic: 'https://i.pravatar.cc/100?img=22',
    time: '2d',
    caption: 'Amazing day at the hackathon!',
  },
  {
    id: '2',
    photo: 'https://picsum.photos/600/600?random=12',
    taggedBy: 'anjali.design',
    taggedByPic: 'https://i.pravatar.cc/100?img=33',
    time: '5d',
    caption: 'Loved collaborating on this UI ✨',
  },
  {
    id: '3',
    photo: 'https://picsum.photos/600/600?random=13',
    taggedBy: 'vanshika.dev',
    taggedByPic: 'https://i.pravatar.cc/100?img=11',
    time: '1w',
    caption: 'Kotlin + Compose session was lit 🔥',
  },
  // Add more if needed...
];

export default function TaggedItems() {
  const [modalVisible, setModalVisible] = useState(false);
  const [active, setActive] = useState(null);

  const { width, height } = useWindowDimensions();

  // Responsive grid columns and tile sizing
  const isTablet = width > 768;
  const isSmallPhone = width < 360;

  const GRID_COLS = isTablet ? 4 : 3;
  const TILE_SIZE = Math.floor(width / GRID_COLS);

  const fontSmall = isTablet ? 14 : isSmallPhone ? 10 : 12;
  const fontMedium = isTablet ? 18 : isSmallPhone ? 12 : 15;

  const openModal = (item) => {
    setActive(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setActive(null);
  };

  const renderTile = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)} activeOpacity={0.85}>
      <ImageBackground
        source={{ uri: item.photo }}
        style={[styles.tile, { width: TILE_SIZE, height: TILE_SIZE }]}
        imageStyle={styles.tileImage}
        resizeMode="cover"
      >
        <View style={styles.tileOverlay}>
          <View style={styles.tagInfo}>
            <Image
              source={{ uri: item.taggedByPic }}
              style={[
                styles.tagPic,
                { width: TILE_SIZE * 0.1 + 20, height: TILE_SIZE * 0.1 + 20, borderRadius: (TILE_SIZE * 0.1 + 20) / 2 },
              ]}
            />
            <View>
              <Text
                numberOfLines={1}
                style={[styles.taggedBy, { fontSize: fontSmall, maxWidth: TILE_SIZE - 80 }]}
              >
                @{item.taggedBy}
              </Text>
              <Text style={[styles.tagTime, { fontSize: fontSmall - 1 }]}>{item.time}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={taggedPhotos}
        renderItem={renderTile}
        keyExtractor={(item) => item.id}
        numColumns={GRID_COLS}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Modal: full screen preview */}
      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
        <SafeAreaView style={styles.modalRoot}>
          <Pressable style={styles.modalClose} onPress={closeModal}>
            <Text style={styles.closeText}>Close ✕</Text>
          </Pressable>

          {active && (
            <View style={[styles.modalInner, { padding: isTablet ? 24 : 16 }]}>
              <Image
                source={{ uri: active.photo }}
                style={[
                  styles.fullImage,
                  {
                    height: isTablet ? height * 0.7 : height * 0.6,
                    borderRadius: isTablet ? 12 : 8,
                  },
                ]}
                resizeMode="contain"
              />

              <View style={[styles.metaRow, { marginTop: isTablet ? 20 : 12 }]}>
                <Image
                  source={{ uri: active.taggedByPic }}
                  style={[
                    styles.metaPic,
                    {
                      width: isTablet ? 60 : 46,
                      height: isTablet ? 60 : 46,
                      borderRadius: isTablet ? 30 : 23,
                    },
                  ]}
                />
                <View style={{ flex: 1 }}>
                  <Text style={[styles.metaUser, { fontSize: fontMedium }]}>
                    @{active.taggedBy}
                  </Text>
                  <Text style={[styles.metaTime, { fontSize: fontSmall + 1 }]}>
                    {active.time} • tagged you
                  </Text>
                </View>
              </View>

              <Text style={[styles.metaCaption, { fontSize: fontMedium - 1 }]}>
                {active.caption}
              </Text>
            </View>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listContent: {
    paddingBottom: 24,
  },
  tile: {
    justifyContent: 'flex-end',
  },
  tileImage: {
    borderWidth: 0.3,
    borderColor: '#e6e6e6',
  },
  tileOverlay: {
    height: 46,
    backgroundColor: 'rgba(0,0,0,0.32)',
    paddingHorizontal: 6,
    paddingVertical: 6,
    justifyContent: 'center',
  },
  tagInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagPic: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    marginRight: 8,
  },
  taggedBy: {
    color: '#fff',
    fontWeight: '600',
  },
  tagTime: {
    color: 'rgba(255,255,255,0.85)',
  },
  /* Modal */
  modalRoot: {
    flex: 1,
    backgroundColor: '#000',
  },
  modalClose: {
    padding: 12,
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalInner: {
    flex: 1,
  },
  fullImage: {
    width: '100%',
    backgroundColor: '#111',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaPic: {},
  metaUser: {
    color: '#fff',
    fontWeight: '700',
  },
  metaTime: {
    color: '#ccc',
    marginTop: 2,
  },
  metaCaption: {
    color: '#eee',
    marginTop: 14,
    lineHeight: 20,
  },
});
