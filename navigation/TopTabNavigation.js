import * as React from 'react';
import { useWindowDimensions, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostsGrid from './PostsGrid';
import VideosGrid from './VideosGrid';
import TaggedItems from './TaggedItems';
import AboutInfo from './AboutInfo';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  const { width } = useWindowDimensions();
  
  const isTablet = width > 768;
  const isSmallPhone = width < 360;

  const fontSize = isTablet ? 16 : isSmallPhone ? 10 : 12;
  const indicatorHeight = isTablet ? 4 : 2.5;
  const tabPaddingVertical = isTablet ? 10 : 6;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarIndicatorStyle: {
          backgroundColor: '#000',
          height: indicatorHeight,
          borderRadius: 10,
          marginHorizontal: isTablet ? 30 : 20,
        },
        tabBarLabelStyle: {
          fontWeight: '600',
          fontSize,
          textTransform: 'capitalize',
        },
        tabBarItemStyle: {
          paddingVertical: tabPaddingVertical,
        },
        tabBarStyle: {
          elevation: Platform.OS === 'android' ? 2 : 0,
          shadowColor: '#000',
          shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.15,
          shadowRadius: 2,
          backgroundColor: '#fff',
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="PostsGrid"
        component={PostsGrid}
        options={{ tabBarLabel: 'Posts' }}
      />
      <Tab.Screen
        name="VideosGrid"
        component={VideosGrid}
        options={{ tabBarLabel: 'Videos' }}
      />
      <Tab.Screen
        name="TaggedItems"
        component={TaggedItems}
        options={{ tabBarLabel: 'Tagged' }}
      />
      <Tab.Screen
        name="AboutInfo"
        component={AboutInfo}
        options={{ tabBarLabel: 'About' }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
