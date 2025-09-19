import { StyleSheet, Platform, Dimensions } from 'react-native';

export const { height: SCREEN_HEIGHT } = Dimensions.get('window');
export const SEMI_WIDTH = 100;

export default StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: SEMI_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  semiCircle: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: SEMI_WIDTH,
    height: SCREEN_HEIGHT,
    borderTopRightRadius: SCREEN_HEIGHT / 2,
    borderBottomRightRadius: SCREEN_HEIGHT / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } },
      android: { elevation: 6 },
    }),
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  iconTop: { top: 100, left: 10 },
  iconBottom: { bottom: 100, left: 10 },
  iconActive: { backgroundColor: 'rgba(255,255,255,0.25)' },
});
