function isValidSudoku(board) {
  const rowFreq = {};
  const columnFreq = {};
  const boxFreq = {};
  for (let row = 0; row < board.length; row++) {
    rowFreq[row] = {};
    for (let column = 0; column < board.length; column++) {
      const currentNumber = board[row][column];

      columnFreq[column] = columnFreq[column] || {};
      // Row calculations
      if (rowFreq[row][currentNumber]) {
        return false;
      } else {
        if (currentNumber !== ".") rowFreq[row][currentNumber] = 1;
      }

      //Column calculations
      if (columnFreq[column][currentNumber]) {
        return false;
      } else {
        if (currentNumber !== ".") columnFreq[column][currentNumber] = 1;
      }

      //Sub 3x3 box calculations
      const boxRow = Math.floor(row / 3);
      const boxColumn = Math.floor(column / 3);
      const boxNumber = boxRow * 3 + boxColumn;
      boxFreq[boxNumber] = boxFreq[boxNumber] || {};
      if (boxFreq[boxNumber][currentNumber]) {
        return false;
      } else if(currentNumber !=='.'){
        
        boxFreq[boxNumber][currentNumber] = 1;
      }
    }
  }
  return true;
}

const sudokuBoard = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(sudokuBoard));
