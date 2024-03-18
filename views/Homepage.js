import { StyleSheet, Text, View, Pressable } from 'react-native';
import {useFonts} from 'expo-font';
import * as Font from 'expo-font';

//landing page
export default function Homepage() {
    //fonts stuff
    let customFonts = {
            'MadimiOne-Regular': require('../assets/font/MadimiOne-Regular.ttf')
    };
    //hook for custom fonts. when they are loaded, the page will load
    const[isLoaded] = useFonts(customFonts);

    //view
    if(isLoaded) {
        return(
            <View>
            <Text style={styles.title}>Dot Game</Text>
            </View>
        );
    } 
}


const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'MadimiOne-Regular',
        color: '#1A1616'
    },
    container: {
        backgroundColor: '#D9D9D9'
    },
    madimiOneRegular: {
        fontFamily: 'MadimiOne-Regular',
        fontWeight: 'normal',
        fontStyle: 'normal',
    }
      
});