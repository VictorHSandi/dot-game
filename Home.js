import { StyleSheet, Text, View, Pressable } from 'react-native';

export function Home({navigation}) {
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.text}>Dot Game</Text>
        <Pressable 
        onPress={() => navigation.navigate('App')}
        style={styles.button}>
          <Text>Load Game</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3a6b64',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeScreen: {
      flex: 1,
      backgroundColor: '#3a6b64',
      flexDirection: 'column',
      justifyContent:'center',
    },
    text: {
      fontSize: 40, 
      color: 'white',
    },
    smallText: {
      fontSize: 35,
      color: 'white'
    },
    map: {
      borderWidth: 1,
      borderColor: 'teal',
      width: '90%',
      aspectRatio: 1,
      backgroundColor: '#b2d8d8',    
    },
    row: {
      flex: 1,
      flexDirection: "row",
    },
    cell: {
      width: '100%',
      height: '100%',
      flex: 1,
      borderColor: "teal",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    srow: {
      flex: 1,
      flexDirection: "row",
    },
    scell: {
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    emptyDot: {
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      alignItems: 'center',
      justifyContent: 'center',
  
      borderWidth: 4,
      borderColor: 'white',
      backgroundColor: '#66b2b2'
    },
    filledDot: {
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      alignItems: 'center',
      justifyContent: 'center',
  
      borderWidth: 4,
      borderColor: 'white',
      backgroundColor: '#006666'
    },
    wrongDot: {
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      alignItems: 'center',
      justifyContent: 'center',
  
      borderWidth: 4,
      borderColor: 'white',
      backgroundColor: '#D3211E'
    },
    selector: {
      width: '30%',
      height: '7%',
      borderColor: 'white',
      borderRadius: '100%',
      borderWidth: 1,
      top: '2%'
    },
    button: {
      
      backgroundColor: '#66b2b2',
      borderColor: '#006666',
      borderWidth: 3,
      justifyContent: 'end'
      
    },
    buttonContainer: {
      padding: 20,
      margin:20,
    }
  });
  