import { StyleSheet, Image, Text, View, Pressable } from 'react-native';
import React, { useState } from "react";
import { useFonts } from 'expo-font';
import ArrowButton from '../components/ArrowButton'
import LevelButton from '../components/LevelButton'

const { ArrowButtonLeft, ArrowButtonRight } = ArrowButton;

export default function LevelMenu({navigation}) {
    //custom fonts
    let customFonts = {
        'MadimiOne-Regular': require('../assets/font/MadimiOne-Regular.ttf')
    };
    const [isLoaded]= useFonts(customFonts);
    //keep track of what difficult is loaded atm (grey out arrows when needed)
    const [header] = useState(['Easy', 'Medium', 'Hard'])
    const [diff, setDiff] = useState('Easy');
    const [greyedLeft, setGreyedLeft] = useState(true);
    const [greyedRight, setGreyedRight] = useState(false);

    //placeholder data (just level title and levels)
    const levelData = {
        difficulty: {
            easy: [
                {levelNums: ["1", "2", "3", "4", "5", "6", "7", "8"]}
            ],
            medium: [
                {levelNums: ["1", "2", "3"]}
            ],
            hard: [],
        }
    }

    //Cycle through difficulties: 
    //todo: makes states for each difficulty and the correct arrow color for each
    //to simplify this 
    const setHeader = (direction) => {
        if (direction == "left") {
            console.log("Left arrow clicked")
            switch(diff){
                case 'Easy':
                    break;
                case 'Medium':
                    setGreyedLeft(true);
                    setDiff('Easy');
                    break;
                case 'Hard':
                    setGreyedRight(false);
                    setDiff('Medium');
                default:
                    break;
            }
        }
        else if(direction == "right") {
            console.log("Right arrow clicked")
            switch(diff){
                case 'Easy':
                    setDiff('Medium');
                    setGreyedLeft(false);
                    break;
                case 'Medium':
                    setDiff('Hard');
                    setGreyedRight(true);
                    break;
                case 'Hard':
                    break;
                default:
                    break;
            }
        }
    }
    //get difficulty level from JSON based on selected Mode
    const getDifficultyData = () => {
        console.log(diff.toLowerCase())
        return levelData.difficulty[diff.toLowerCase()];
    };

    //load view
    if(isLoaded) {
        return(
            <View style={styles.container}>
               {/* header */}
               <View style={styles.headerContainer}>
                    <ArrowButtonLeft greyed={greyedLeft} onPress={() => setHeader("left")}/>
                    <Text style={styles.title}>{diff}</Text>
                    <ArrowButtonRight greyed={greyedRight} onPress={() => setHeader("right")}/>
               </View>
               
               {/* load buttons */}
                <View id='buttons' style={styles.levelsContainer}>
                    {levelsBuilder(getDifficultyData())}
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


const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'MadimiOne-Regular',
        color: '#1A1616',
        marginLeft: 25,
        marginRight: 25,
    },
    container: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    levelsContainer: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        flexDirection: 'column', 
        alignItems: 'center',
        margin: 10,
        padding: 10,
        height: 500,
        width: 300
    },
    headerContainer: {
        flexDirection: 'row',
        alignIems: 'center',
        justifyContent: 'space-between',
    },
    levelsRows: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: 10, 
        width: '100%'
    },
});