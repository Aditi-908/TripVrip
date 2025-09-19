import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  inputContainer: {
    marginVertical: 16,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,          // smaller padding
    fontSize: 14,        // smaller text
    height: 36,          // smaller height
  },
  buttonWrapper: {
    width: '30%',        // button takes only 30% width
    alignSelf: 'flex-start',
  },
  generatedText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});
