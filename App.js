import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from "react";
import dot from './assets/dots.png'

export default function App() {
  
  function checkSolution(board) {
    for(let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if(board[row][col] == '') {
          board[row][col] = 'f'; //dark dot
          if(isValid(board, row, col, board.length/2,  board[row].length / 2) && checkSolution(board)) {
            return true;
          }
          board[row][col] = ''; //backtrack

          board[row][col] = 'e'; //light dot
          if(isValid(board, row, col, board.length/2,  board[row].length / 2) && checkSolution(board)) {
            return true;
          }
          board[row][col] = ''; //backtrack
          return false;
        }
      }
    }
    return true;
  };

  function isValid(board, row, col, numDark, numLight) {
    //check row has equal dots
    if(board[row].filter(cell => cell === 'f').length > numDark ||
      board[row].filter(cell => cell === 'e').length > numLight) {
        return false;
      }
    //check column has equal dots
    if(board.map(row => row[col]).filter(cell => cell === 'f').length > numDark ||
    board.map(row => row[col]).filter(cell => cell === 'e').length > numLight) {
      return false;
    }
    return true;
  };

//default board state
const [board, setMap] = useState([
      ['f', 'f', 'e', 'e'], // row 1 temp test size
      ['f', 'f', 'e', ''], // row 2
      ['', 'e', '', ''], // row 3
      ['', '', 'f', 'f'], // row 4
]);

const reset = () => {
  setMap(() => {
    return([
      ['f', 'f', 'e', 'e'], // row 1 temp test size
      ['f', 'f', 'e', ''], // row 2
      ['', 'e', '', ''], // row 3
      ['', '', 'f', 'f'], // row 4
    ]);
  });
};  

const [selectDot] = useState([
  ['f','e']
]);

const [currentDot, setCurrentDot] = useState('f');

const onPress = (rowIndex, colIndex) => {

  setMap((existingMap) =>{
    const updatedMap = [...existingMap];
    updatedMap[rowIndex][colIndex] = currentDot;
    if(checkSolution(updatedMap.slice()) == true ) {
      console.log("Correct")
    }
    else {
      console.log("Incorrect")
    }
    console.log(board);
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
        onPress={() => reset()} 
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
  wrongDot: {
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
