import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import React, { useState } from "react";
import { resetBoard } from "./Board.js"
import dot from './assets/dots.png'


export default function App() {
//default board state
const [board, setMap] = useState([
  ['f', 'e', 'f', 'f', ''], // row 1 temp test size
  ['f', 'f', 'e', '', ''], // row 2
  ['', 'e', '', 'e', 'f'], // row 3
  ['', 'f', 'e', 'f', ''], // row 4
  ['e', '', '', '', ''], // row 4
]);

const [selectDot] = useState([
  ['f','e']
]);

const [currentDot, setCurrentDot] = useState('f');

const onPress = (rowIndex, colIndex) => {

  setMap((existingMap) =>{
    const updatedMap = [...existingMap];
    updatedMap[rowIndex][colIndex] = currentDot;
    return updatedMap;
  });
};

const selectorPress = (currentDot) => {
  setCurrentDot(currentDot == "0" ? "f" : "e");
  console.warn(currentDot);
};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dot Game</Text>
      <View style={styles.map}>
      {/* board stuff */}
        {board.map((row, rowIndex) => (
          <View style={styles.row}>
            {row.map((cell, colIndex) => (
              <Pressable onPress={() => onPress(rowIndex, colIndex)} style={styles.cell}>
                {cell == 'f' && <View style={styles.filledDot}/>}
                {cell == 'e' && <View style={styles.emptyDot}/>}
              </Pressable>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.selector}>
      {selectDot.map((row) => (
          <View style={styles.srow}>
            {row.map((cell, colIndex) => (
              <Pressable onPress={() => selectorPress(colIndex)} style={styles.scell}>
                {cell == 'f' && <View style={styles.filledDot}/>}
                {cell == 'e' && <View style={styles.emptyDot}/>}
              </Pressable>
            ))}
          </View>
        ))}
      </View>
      
      {/* reset button for testing/clearing the board!! */}
      <View style={styles.buttonContainer}>
        <Pressable 
        onPress={console.log("Reset")}
        style={styles.button}>
          <Text style={styles.smallText}>Reset</Text>
        </Pressable>
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
