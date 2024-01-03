// component for the board

export default Board = () => {
    const [defaultBoard] = useState([
        ['f', 'e', 'f', 'f', ''], // row 1 temp test size
        ['f', 'f', 'e', '', ''], // row 2
        ['', 'e', '', 'e', 'f'], // row 3
        ['', 'f', 'e', 'f', ''], // row 4
        ['e', '', '', '', ''], // row 4
    ]);

    //option to clear the board and restart for testing
    const resetBoard = () => {
        
        
    };
}