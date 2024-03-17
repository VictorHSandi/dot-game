
//placeholder for all things handling the board/level
//need to use the App.js for other stuff
export default function Game() {
    const [board, setMap] = useState([['f', 'f', 'e', 'e'], // row 1 temp test size
    ['f', 'f', 'e', ''], // row 2
    ['', 'e', '', ''], // row 3
    ['', '', 'f', 'f']] // row 4
    );
const [solutionBoard, setSolution] = useState([['f', 'f', 'e', 'e'], // row 1 temp test size
  ['f', 'f', 'e', ''], // row 2
  ['', 'e', '', ''], // row 3
  ['', '', 'f', 'f']] // row 4);
);
const [selectDot] = useState([
['f','e']
]);
const [currentDot, setCurrentDot] = useState('f');

//win-algorithm ----------------------------------------
//recursive function to find possible solutions of board
function checkSolution(solutionBoard) { 
  
  for(let row = 0; row < solutionBoard.length; row++) {
    for (let col = 0; col < solutionBoard[row].length; col++) {
      if(solutionBoard[row][col] == '') {
        solutionBoard[row][col] = 'f'; //dark dot
        if(isValid(solutionBoard, row, col, solutionBoard.length/2,  solutionBoard[row].length / 2) && checkSolution(solutionBoard)) {
          return true;
        }

        solutionBoard[row][col] = 'e'; //light dot
        if(isValid(solutionBoard, row, col, solutionBoard.length/2,  solutionBoard[row].length / 2) && checkSolution(solutionBoard)) {
          return true;
        }
        //if no solution can be found, return false
        return false;
      }
      //if board is full, check if it is incorrect
      else {
          if(isValid(solutionBoard, row, col, solutionBoard.length/2, solutionBoard[row].length / 2) == false) {
            return false;
          }
        }
      }
    }
  
  return true;
};
//check board is complete/valid
function isValid(solutionBoard, row, col, numDark, numLight) {
  //check row has equal dots
  if(solutionBoard[row].filter(dotColor => dotColor == 'f').length > numDark ||
  solutionBoard[row].filter(dotColor => dotColor == 'e').length > numLight) {
      return false;
    }
  //check column has equal dots
  if(solutionBoard.map(row => row[col]).filter(dotColor => dotColor == 'f').length > numDark ||
  solutionBoard.map(row => row[col]).filter(dotColor => dotColor == 'e').length > numLight) {
    return false;
  }
  return true;
};

const onPress = (rowIndex, colIndex) => {
  //checks most recently placed dot.
  setSolution((existingMap) => {
    const solution = [...existingMap];
    solution[rowIndex][colIndex] = currentDot;
    if (checkSolution(solution)) {
      console.log("Correct");
      console.log("Solution: " + solution)
      console.log("Board " + existingMap);
      return solution; //update the solution....
    }
    else {
      console.log("Incorrect");
      console.log("Solution: " + solution)
      console.log("Board " + existingMap);
      return existingMap; //dont change anything?
    }
  });
  setMap((existingMap) =>{
    console.log("set map")
    const updatedMap = [...existingMap];
    updatedMap[rowIndex][colIndex] = currentDot;
    return updatedMap;
  });
};

const reset = () => {
  setMap(() => {
    return([
      ['f', 'f', 'e', 'e'], // row 1 temp test size
      ['f', 'f', 'e', ''], // row 2
      ['', 'e', '', ''], // row 3
      ['', '', 'f', 'f'], // row 4
    ]);
  });
  //reset the solution board as well
  setSolution(() => {
    return([
      ['f', 'f', 'e', 'e'], 
      ['f', 'f', 'e', ''], 
      ['', 'e', '', ''], 
      ['', '', 'f', 'f'], 
    ]);
  });
};  

const selectorPress = (currentDot) => {
setCurrentDot(currentDot == "0" ? "f" : "e");
console.warn(currentDot);
};
    return(
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
        {/* reset button */}
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
};


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
  