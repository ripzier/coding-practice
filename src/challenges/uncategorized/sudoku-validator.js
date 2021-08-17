function validateSudoku(board) {
  const boxes = new Array(9).fill(0)
  const rows = new Array(9).fill(0)
  const columns = new Array(9).fill(0)

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      boxes[i] +=
        board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]

      rows[i] += board[i][j]

      columns[i] += board[j][i]
    }

    if (rows[i] !== 45 || columns[i] !== 45 || boxes[i] !== 45) {
      return false
    }
  }

  return true
}

module.exports = validateSudoku
