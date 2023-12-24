const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const line = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const perimeter = [];

      if (matrix[i - 1]) {
        const top = matrix[i - 1][j];
        const leftTop = matrix[i - 1][j - 1];
        const rigthTop = matrix[i - 1][j + 1];
        perimeter.push(top, leftTop, rigthTop);
      }

      const right = matrix[i][j + 1];
      const left = matrix[i][j - 1];

      perimeter.push(right, left);

      if (matrix[i + 1]) {
        const bottom = matrix[i + 1][j];
        const leftBottom = matrix[i + 1][j - 1];
        const rightBottom = matrix[i + 1][j + 1];
        perimeter.push(bottom, leftBottom, rightBottom);
      }

      const mines = perimeter.reduce((acc, item) => {
        if (item) acc++;
        return acc;
      }, 0);
      line.push(mines);
    }
    result.push(line);
  }

  return result;
}

module.exports = {
  minesweeper
};
