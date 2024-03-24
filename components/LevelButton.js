import { Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
//Todo: add OnPress action
export default function LevelButton({title}) {
    return(
        <TouchableOpacity style={styles.levelButton} onPress={() => console.log("Load level " + title)}>
            <Text style={styles.levelText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'MadimiOne-Regular'
    }, 
})