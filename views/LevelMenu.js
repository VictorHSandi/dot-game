import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

export default function LevelMenu({navigation}) {
    //custom fonts
    let customFonts = {
        'MadimiOne-Regular': require('../assets/font/MadimiOne-Regular.ttf')
    };
    const[isLoaded]= useFonts(customFonts);

    //load view
    if(isLoaded) {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Level menu</Text>
                <View style={styles.levelsContainer}>
                    {/* load in the levels from json and create appropriate buttons */}
                    <LevelButton onPress={()}>
                </View>
            </View>
        );
    }
}

//reuseable component for the level buttons
const LevelButton = ({onPress, title}) => {
    return(
        <Pressable style={styles.levelButton} onPress={onPress}>
            <Text style={styles.levelText}>{title}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'MadimiOne-Regular',
        color: '#1A1616',
    },
    container: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    levelsContainer: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        alignItems: 'center',
        height: 500,
        width: 300
    },
    levelButton: {
        borderRadius: 50,
        backgroundColor: '#1A1616',
        justifyContent: 'center',
        alignItems: 'center',
    },
    levelText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
})