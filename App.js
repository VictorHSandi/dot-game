import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import dot from './assets/dots.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.map} >
        <View style={styles.eoutDot}>
          <View style ={styles.einDot}/>
        </View>
        <View style={styles.filledDot}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a6b64',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  map: {
    borderWidth: 1,
    borderColor: 'white',
    width: '90%',
    aspectRatio: 1,
  },
  eoutDot: {
    position: 'absolute',

    left: 0 * 60,
    top: 1 * 60,

    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  einDot: {
    width: 42,
    height: 42,
    backgroundColor: '#dbdbdb',
    borderRadius: 50,
  },
  filledDot: {
    position: 'absolute',

    left: 1 * 60,
    top: 1 * 60,

    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,

    borderWidth: 4,
    borderColor: 'white',
  },
});
