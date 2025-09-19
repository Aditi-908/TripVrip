// components/CustomSideTabBar.tsx
import React, { useEffect, useRef, useState } from 'react';
import { View, Pressable, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles, { SEMI_WIDTH } from './CustomSideTabBar.styles';

export function CustomSideTabBar({ state, navigation }: BottomTabBarProps) {
  const [open, setOpen] = useState(false);
  const slideX = useRef(new Animated.Value(-SEMI_WIDTH)).current; // hidden off-screen

  const isActive = (i: number) => state.index === i;
  const goTo = (i: number) => {
    navigation.navigate(state.routes[i].name as never);
    setOpen(false); // close after navigation
  };

  useEffect(() => {
    Animated.timing(slideX, {
      toValue: open ? 0 : -SEMI_WIDTH,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [open, slideX]);

  return (
    <View pointerEvents="box-none" style={styles.absoluteFill}>
      {/* Tap outside to close (only when open) */}
      {open && (
        <Pressable
          style={styles.overlay}
          onPress={() => setOpen(false)}
          android_ripple={{ color: 'transparent' }}
        />
      )}

      {/* Three-dot toggle (hidden when open) */}
      {!open && (
        <Pressable style={styles.toggleButton} onPress={() => setOpen(true)}>
          <Ionicons name="ellipsis-vertical" size={24} color="#333" />
        </Pressable>
      )}

      {/* Sidebar */}
      <Animated.View style={[styles.container, { left: slideX }]}>
        <BlurView intensity={30} tint="light" style={styles.semiCircle}>
          <Pressable
            onPress={() => goTo(0)}
            style={[styles.iconWrapper, styles.iconTop, isActive(0) && styles.iconActive]}
          >
            <Ionicons name={isActive(0) ? 'home' : 'home-outline'} size={24} />
          </Pressable>

          <Pressable
            onPress={() => goTo(1)}
            style={[styles.iconWrapper, styles.iconBottom, isActive(1) && styles.iconActive]}
          >
            <Ionicons name={isActive(1) ? 'compass' : 'compass-outline'} size={24} />
          </Pressable>
        </BlurView>
      </Animated.View>
    </View>
  );
}
