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
                    {/* TODO: automate this so that when each row is full create a new row component */}
                    <View style={styles.levelsRows}>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="1" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                    </View>
                    {/* load in the levels from json and create appropriate buttons */}
                    <View style={styles.levelsRows}>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                    </View>
                </View>
            </View>
        );
    }
}

{/* //reuseable component for the level buttons */}
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
        flexDirection: 'column', 
        alignItems: 'center',
        margin: 20,
        padding: 10,
        height: 500,
        width: 300
    },
    levelsRows: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: 10, 
        width: '100%'
    },
    levelButton: {
        borderRadius: 50,
        backgroundColor: '#1A1616',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        margin: 5,
        width: 55,
        height: 55,
    },
    levelText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'MadimiOne-Regular'
    },
})