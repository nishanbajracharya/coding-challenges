type Matrix2D = number[][];

function search2DMatrix(matrix: Matrix2D, target: number) {
    let row = 0;

    if (matrix.length > 1) {
        for (let i = 0; i < matrix.length; i++) {
            if (target === matrix[i][0]) {
                return true;
            }
            if (target < matrix[i][0]) {
                row = Math.max(0, i - 1);
                break;
            }
            if (i === matrix.length - 1) {
                row = i;
            }
        }
    }

    const rowArray = matrix[row];

    if (!rowArray) return false;

    return rowArray.includes(target);
}
