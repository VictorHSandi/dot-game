import { StyleSheet, Text, View, Pressable } from 'react-native';
import {useFonts} from 'expo-font';
import * as Font from 'expo-font';

//landing page
export default function Homepage({navigation}) {
    //fonts stuff
    let customFonts = {
            'MadimiOne-Regular': require('../assets/font/MadimiOne-Regular.ttf')
    };
    //hook for custom fonts. when they are loaded, the page will load
    const[isLoaded] = useFonts(customFonts);

    //view
    if(isLoaded) {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Dot Game</Text>
                <Pressable onPress={() => navigation.navigate('Game')}style={styles.button} >
                    <Text style={styles.text}>
                        Play
                    </Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>
                        Settings
                    </Text>
                </Pressable>
                {/* For testing */}
                <Pressable onPress={()=> navigation.navigate('LevelMenu')} style={styles.button}>
                    <Text style={styles.text}>
                        Level Menu
                    </Text>
                </Pressable>
            </View>
        );
    } 
}


const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'MadimiOne-Regular',
        color: '#1A1616',
        
    },
    text: {
        fontSize: 20,
        fontFamily: 'MadimiOne-Regular',
        color: '#D9D9D9',
    },
    container: {
        flex: 1, 
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',

    },
    madimiOneRegular: {
        fontFamily: 'MadimiOne-Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    button: {
        backgroundColor:"#1A1616",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        width: 100,
        height: 50,
    }
      
});