import { useState } from "react";

const GridComponent = ({ size }) => {
  const _arr = [...Array(size)].map((u, i) =>
    [...Array(size)].map((e, j) => {
      return { value: "" };
    })
  );

  const [gridArray, setGridArray] = useState(_arr);
  const [isCurrentX, setCurrentX] = useState(false);

  const handleSquareClick = (rowIndex, squareIndex) => {
    console.log(rowIndex, squareIndex);
    let copySquareArray = [...gridArray];
    let internalArray = [...copySquareArray[rowIndex]];
    let square = internalArray[squareIndex];
    if (!square.value) {
      square.value = isCurrentX ? "0" : "X";
      setCurrentX(!isCurrentX);
    }
    internalArray[squareIndex] = square;
    copySquareArray[rowIndex] = internalArray;
    setGridArray(copySquareArray);
  };

  return (
    <div className="parent">
      {gridArray.map((rowArray, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            {rowArray.map((obj, squareIndex) => {
              return (
                <div
                  key={squareIndex}
                  onClick={() => handleSquareClick(rowIndex, squareIndex)}
                  className="square"
                >
                  {obj["value"]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridComponent;
