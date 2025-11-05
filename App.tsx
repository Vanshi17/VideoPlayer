import React from 'react';
import { View, ScrollView, useWindowDimensions, StyleSheet } from 'react-native';
import Header from './components/Header';
import TopTabNavigation from './navigation/TopTabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const { width, height } = useWindowDimensions(); // Dynamically get screen size

  return (
    <NavigationContainer>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.contentContainer, { minHeight: height }]}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]} 
      >
        <Header />
        <View style={[styles.tabSection, { height: height * 0.75 }]}>
          <TopTabNavigation />
        </View>
      </ScrollView>

    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  tabSection: {
    flex: 1,
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
