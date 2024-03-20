import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from "react";
import { useFonts } from 'expo-font';

export default function LevelMenu({navigation}) {
    //custom fonts
    let customFonts = {
        'MadimiOne-Regular': require('../assets/font/MadimiOne-Regular.ttf')
    };
    const [isLoaded]= useFonts(customFonts);
    //keep track of what difficult is loaded atm (grey out arrows when needed)
    const [loadedDifficulty] = useState(['easy', 'medium'])
    //placeholder data (just level title and levels)
    const levelData = {
        difficulty: {
            easy: [
                {levelNums: ["1", "2", "3", "4", "5", "6", "7", "8"]}
            ],
            medium: [
                {levelNums: ["1", "2", "3"]}
            ]
        }
    }

    //load view
    if(isLoaded) {
        return(
            <View style={styles.container}>
                {/* <DifficultyHeader title={difficulty[0]}/> */}
                {/* <View style={styles.levelsContainer}>
              
                    <View style={styles.levelsRows}>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="1" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                    </View>
               
                    <View style={styles.levelsRows}>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                        <LevelButton onPress={()=> navigation.navigate('Game')} title="2" style={styles.levelButton}></LevelButton>
                    </View>
                </View> */}
                <View style={styles.levelsContainer}>
                    {levelsBuilder(levelData.difficulty.easy)}
                </View>
            </View>
        );
    }
}
//Build all the level buttons
export const LevelsEntry = ({ levelNum = []}) => {
    console.log(levelNum)
    return(
        <>
            {levelNum.map((num) => (
                <LevelButton title={num}/>
            ))}
        </>
    );
}
//Load all the levels form the JSON and create a LevelsEntry component
export const levelsBuilder = (levels) => {
    const rows = [];
    //create four buttons per row
    for (let i = 0; i < levels.length; i += 4) {
        const rowLevels = levels.slice(i, i+4);
        //create row
        const row = (
            <View style={styles.levelsRows}>
                {rowLevels.map((levels) => (
                    <LevelsEntry levelNum={levels.levelNums} />
                ))}
            </View>
        );
        rows.push(row);
    }
    return rows;
}

//Todo: add OnPress action
const LevelButton = ({title}) => {
    return(
        <Pressable style={styles.levelButton}>
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