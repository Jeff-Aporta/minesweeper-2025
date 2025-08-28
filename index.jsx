class App extends React.Component {
  componentDidMount() {
    SINGLETON.APP = this;
  }

  render() {
    return (
      <div>
        <center>
          <h1>BUSCAMINAS</h1>
        </center>
        {this.GameContainer()}
        {Firma()}
      </div>
    );
  }

  GameContainer() {
    const APP = this;

    const GAME_CONTAINER = class extends React.Component {
      componentDidMount() {
        SINGLETON.GAME_CONTAINER = this;
      }
      render() {
        return (
          <div className="container-center">
            <div className="game-container">
              <Tools />
              <Table />
            </div>
          </div>
        );

        function Table() {
          return (
            <table
              cellSpacing="0"
              cellPadding="0"
              className="game-board-container"
            >
              <APP.TbodyMinesweeper />
            </table>
          );
        }

        function Tools() {
          return (
            <div className="pad-5px row-tools">
              <NewGame />
              <MinesCount />
            </div>
          );

          function MinesCount() {
            return (
              <div className="mines-count">
                <IconFlag />{" "}
                {(nMines - countFlag()).toString().padStart(3, "0")}
              </div>
            );
          }

          function NewGame() {
            return (
              <CustomButton
                onClick={() => {
                  initGameBoard();
                  APP.forceUpdate();
                }}
              >
                Nuevo Juego
              </CustomButton>
            );
          }
        }
      }
    };
    return <GAME_CONTAINER />;
  }

  TbodyMinesweeper() {
    const TBODY = class extends React.Component {
      componentDidMount() {
        SINGLETON.TBODY = this;
      }
      render() {
        if (successGame()) {
          WIN = true;
        }

        const handleRightClick = (e, i, j) => {
          e.preventDefault();
          const isRightClick = e.button === 2;
          if (!isRightClick) {
            return;
          }
          if (GAME_BOARD[i][j].revealed) {
            return;
          }
          GAME_BOARD[i][j].flagged = !GAME_BOARD[i][j].flagged;
          SINGLETON.APP.forceUpdate();
        };

        const handleLeftClick = (event, i, j) => {
          const isLeftClick = event.button === 0;
          if (!isLeftClick) {
            return;
          }
          if (GAME_BOARD[i][j].revealed || GAME_BOARD[i][j].flagged) {
            return;
          }
          if (GAME_BOARD[i][j].mine) {
            gameOver();
            return;
          }
          GAME_BOARD[i][j].revealed = true;
          if (GAME_BOARD[i][j].neighborMines == 0) {
            openIsland({ row: i, col: j });
          }
          SINGLETON.TBODY.forceUpdate();
        };

        const handleDblClick = (event, i, j) => {
          const isLeftClick = event.button === 0;
          if (!isLeftClick) {
            return;
          }
          if (!GAME_BOARD[i][j].revealed) {
            return;
          }
          openNeighbor({ row: i, col: j });
          SINGLETON.TBODY.forceUpdate();
        };

        return (
          <tbody
            className={formatClassName(
              "game-board",
              ["", "game-over"][+GAME_OVER],
              ["", "win"][+WIN]
            )}
          >
            {Array.from({ length: HEIGHT_BOARD }, (_, i) => (
              <tr key={i}>
                {/* Rows */}
                {Array.from({ length: WIDTH_BOARD }, (_, j) => (
                  /* Columns */
                  <td
                    key={j}
                    className={formatClassName(
                      "cell",
                      `col-${j}`,
                      `row-${i}`,
                      `neighbormines-${GAME_BOARD[i][j].neighborMines}`,
                      ["hide", "revealed"][+GAME_BOARD[i][j].revealed],
                      ["", "mine"][+GAME_BOARD[i][j].mine],
                      ["even", "odd"][(i + j) % 2]
                    )}
                    onContextMenu={(e) => handleRightClick(e, i, j)}
                    onClick={(e) => handleLeftClick(e, i, j)}
                    onDoubleClick={(e) => handleDblClick(e, i, j)}
                  >
                    {/* Cell content */}
                    <MineState i={i} j={j} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        );

        function MineState({ i, j }) {
          if (GAME_BOARD[i][j].flagged) {
            return <IconFlag />;
          }
          if (!GAME_BOARD[i][j].revealed) {
            return "";
          }
          if (GAME_BOARD[i][j].mine) {
            return (
              <img
                src="src/svg/icon-mine.svg"
                alt="Mine"
                width={SIDE_CELL * 0.5}
                height={SIDE_CELL * 0.5}
              />
            );
          }
          if (GAME_BOARD[i][j].neighborMines > 0) {
            return GAME_BOARD[i][j].neighborMines;
          }
          return "";
        }
      }
    };
    return <TBODY />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
