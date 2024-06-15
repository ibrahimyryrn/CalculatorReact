function Buttons({
  handleNum,
  handleSign,
  handleReset,
  handleNegativePozitive,
}) {
  return (
    <div className="buttons">
      <button className="button" value="AC" onClick={handleReset}>
        AC
      </button>
      <button className="button" value="+-" onClick={handleNegativePozitive}>
        +/-
      </button>
      <button
        className="button"
        value="%"
        onClick={(e) => handleSign(e.target.value)}
      >
        %
      </button>
      <button
        className="button operator"
        value="/"
        onClick={(e) => handleSign(e.target.value)}
      >
        /
      </button>
      <button
        className="button"
        value="7"
        onClick={(e) => handleNum(e.target.value)}
      >
        7
      </button>
      <button
        className="button"
        value="8"
        onClick={(e) => handleNum(e.target.value)}
      >
        8
      </button>
      <button
        className="button"
        value="9"
        onClick={(e) => handleNum(e.target.value)}
      >
        9
      </button>
      <button
        className="button operator"
        value="X"
        onClick={(e) => handleSign(e.target.value)}
      >
        X
      </button>
      <button
        className="button"
        value="4"
        onClick={(e) => handleNum(e.target.value)}
      >
        4
      </button>
      <button
        className="button"
        value="5"
        onClick={(e) => handleNum(e.target.value)}
      >
        5
      </button>
      <button
        className="button"
        value="6"
        onClick={(e) => handleNum(e.target.value)}
      >
        6
      </button>
      <button
        className="button operator"
        value="-"
        onClick={(e) => handleSign(e.target.value)}
      >
        -
      </button>
      <button
        className="button"
        value="1"
        onClick={(e) => handleNum(e.target.value)}
      >
        1
      </button>
      <button
        className="button"
        value="2"
        onClick={(e) => handleNum(e.target.value)}
      >
        2
      </button>
      <button
        className="button"
        value="3"
        onClick={(e) => handleNum(e.target.value)}
      >
        3
      </button>
      <button
        className="button operator"
        value="+"
        onClick={(e) => handleSign(e.target.value)}
      >
        +
      </button>
      <button
        className="button zero"
        value="0"
        onClick={(e) => handleNum(e.target.value)}
      >
        0
      </button>
      <button
        className="button"
        value="."
        onClick={(e) => handleNum(e.target.value)}
      >
        .
      </button>
      <button
        className="button operator"
        value="="
        onClick={(e) => handleSign(e.target.value)}
      >
        =
      </button>
    </div>
  );
}

export default Buttons;
