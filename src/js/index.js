function initGameBoard() {
  GAME_OVER = false;
  WIN = false;
  nMines = 0;
  for (let i = 0; i < HEIGHT_BOARD; i++) {
    GAME_BOARD[i] = [];
    for (let j = 0; j < WIDTH_BOARD; j++) {
      const isMine = Math.random() < MINES_PERCENT;
      if (isMine) {
        nMines++;
      }
      GAME_BOARD[i][j] = {
        mine: isMine,
        revealed: false,
        flagged: false,
        neighborMines: 0,
      };
    }
  }

  for (let i = 0; i < HEIGHT_BOARD; i++) {
    for (let j = 0; j < WIDTH_BOARD; j++) {
      convolucion(j, i);
    }
  }

  // Convolucion para identificar las minas vecinas
  function convolucion(col, row) {
    for (let i = -1; i <= 1; i++) {
      // Arriba, misma fila, abajo
      for (let j = -1; j <= 1; j++) {
        // Izquierda, misma columna, derecha
        if (i === 0 && j === 0) {
          continue;
        }
        const neighborCol = col + i;
        const neighborRow = row + j;
        if (
          neighborCol < 0 ||
          neighborCol >= WIDTH_BOARD ||
          neighborRow < 0 ||
          neighborRow >= HEIGHT_BOARD
        ) {
          continue;
        }
        if (GAME_BOARD[neighborRow][neighborCol].mine) {
          GAME_BOARD[row][col].neighborMines++;
        }
      }
    }
  }
}

function gameOver() {
  GAME_OVER = true;
  for (let i = 0; i < HEIGHT_BOARD; i++) {
    for (let j = 0; j < WIDTH_BOARD; j++) {
      if (GAME_BOARD[i][j].mine) {
        GAME_BOARD[i][j].revealed = true;
      }
    }
  }
  SINGLETON.TBODY.forceUpdate();
}

function openNeighbor({ row, col }) {
  openIsland({ row, col, recursive: false });
}

function openIsland({ row, col, recursive = true }) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      const neighborCol = col + i;
      const neighborRow = row + j;
      if (
        neighborCol < 0 ||
        neighborCol >= WIDTH_BOARD ||
        neighborRow < 0 ||
        neighborRow >= HEIGHT_BOARD
      ) {
        continue;
      }
      const neighbor = GAME_BOARD[neighborRow][neighborCol];
      if (neighbor.flagged) {
        continue;
      }
      if (neighbor.mine) {
        gameOver();
        return;
      }
      if (neighbor.neighborMines == 0 && !neighbor.revealed) {
        neighbor.revealed = true;
        recursive && openIsland({ row: neighborRow, col: neighborCol });
      }
      neighbor.revealed = true;
    }
  }
}

function successGame() {
  let notRevealed = 0;
  for (let i = 0; i < HEIGHT_BOARD; i++) {
    for (let j = 0; j < WIDTH_BOARD; j++) {
      if (!GAME_BOARD[i][j].revealed) {
        notRevealed++;
      }
    }
  }
  return notRevealed == nMines;
}

function countFlag() {
  let count_flag = 0;
  for (let i = 0; i < HEIGHT_BOARD; i++) {
    for (let j = 0; j < WIDTH_BOARD; j++) {
      if (GAME_BOARD[i][j].flagged) {
        count_flag++;
      }
    }
  }
  return count_flag;
}