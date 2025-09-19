// app/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { CustomSideTabBar } from '@/components/CustomSideTabBar';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // hide default
      }}
      tabBar={(props) => <CustomSideTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
    </Tabs>
  );
}
