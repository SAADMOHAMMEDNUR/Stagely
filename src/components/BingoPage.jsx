import React, { useState } from "react";
import { Link } from "react-router";

const CARD_WORDS = [
  "Touchdown",
  "Crowd cheers",
  "Instant replay",
  "Flag on play",
  "Field goal",
  "Celebrity cameo",
  "Car commercial",
  "Slow-motion shot",
  "Mascot appears",
  "Insurance ad",
  "Coach yelling",
  "Halftime teaser",
  "FREE",
  "Drone camera",
  "Timeout",
  "Pop song plays",
  "Fast food ad",
  "Confetti shot",
  "Brand slogan",
  "Laughing fans",
  "Missed tackle",
  "Halftime outfit change",
  "Fireworks",
  "Overtime mention",
  "Winning prediction"
];

const FREE_INDEX = 12;

function buildLines() {
  const lines = [];
  let rowIndex = 0;

  while (rowIndex < 5) {
    lines.push([
      rowIndex * 5 + 0,
      rowIndex * 5 + 1,
      rowIndex * 5 + 2,
      rowIndex * 5 + 3,
      rowIndex * 5 + 4
    ]);
    rowIndex = rowIndex + 1;
  }

  let columnIndex = 0;
  while (columnIndex < 5) {
    lines.push([
      0 * 5 + columnIndex,
      1 * 5 + columnIndex,
      2 * 5 + columnIndex,
      3 * 5 + columnIndex,
      4 * 5 + columnIndex
    ]);
    columnIndex = columnIndex + 1;
  }

  lines.push([0, 6, 12, 18, 24]);
  lines.push([4, 8, 12, 16, 20]);

  return lines;
}

function getCellStyle(index, marked) {
  const buttonStyle = {
    minHeight: "120px",
    width: "100%",
    border: "2px solid #1f1f1f",
    borderRadius: "14px",
    background: "#fff",
    fontWeight: 600,
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "14px",
    lineHeight: "1.15",
    userSelect: "none",
    cursor: "pointer"
  };

  if (index === FREE_INDEX) {
    buttonStyle.background = "#6c757d";
    buttonStyle.color = "#fff";
    buttonStyle.borderColor = "#6c757d";
    buttonStyle.cursor = "not-allowed";
  }

  if (marked.has(index)) {
    buttonStyle.background = "#212529";
    buttonStyle.color = "#fff";
    buttonStyle.borderColor = "#212529";
  }

  if (index === FREE_INDEX) {
    buttonStyle.background = "#6c757d";
    buttonStyle.color = "#fff";
    buttonStyle.borderColor = "#6c757d";
  }

  return buttonStyle;
}

function BingoPage(props) {
  const lines = buildLines();

  const [marked, setMarked] = useState(() => {
    return new Set([FREE_INDEX]);
  });

  function toggleMark(index) {
    if (index === FREE_INDEX) {
      return;
    }

    setMarked((previousMarked) => {
      const nextMarked = new Set(previousMarked);

      if (nextMarked.has(index)) {
        nextMarked.delete(index);
      } else {
        nextMarked.add(index);
      }

      return nextMarked;
    });
  }

  function clearMarks() {
    setMarked(new Set([FREE_INDEX]));
  }

  let hasBingo = false;
  let lineIndex = 0;

  while (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];
    let allMarked = true;

    let itemIndex = 0;
    while (itemIndex < currentLine.length) {
      if (!marked.has(currentLine[itemIndex])) {
        allMarked = false;
      }
      itemIndex = itemIndex + 1;
    }

    if (allMarked) {
      hasBingo = true;
    }

    lineIndex = lineIndex + 1;
  }

  let statusText = "No bingo yet — keep watching 👀";
  if (hasBingo) {
    statusText = "BINGO! You got it!";
  }

  let statusClassName = "text-muted";
  if (hasBingo) {
    statusClassName = "fw-bold";
  }

  const pageWrapStyle = {
    paddingTop: "24px",
    paddingBottom: "24px"
  };

  const titleStyle = {
    fontSize: "44px",
    fontWeight: 800,
    marginBottom: "6px",
    textAlign: "center"
  };

  const subtitleStyle = {
    textAlign: "center",
    color: "#6c757d",
    marginBottom: "18px"
  };

  const controlsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "22px"
  };

  const gridWrapStyle = {
    display: "flex",
    justifyContent: "center"
  };

  const gridStyle = {
    width: "min(920px, 100%)",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "14px"
  };

  const statusWrapStyle = {
    textAlign: "center",
    marginTop: "22px"
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "999px",
    border: "1px solid #dee2e6",
    background: "#f8f9fa",
    fontWeight: 700,
    marginTop: "10px"
  };

  const markedCount = marked.size;

  const cardButtonElements = CARD_WORDS.map((word, index) => {
    let isDisabled = false;

    if (index === FREE_INDEX) {
      isDisabled = true;
    }

    return (
      <button
        key={index}
        type="button"
        disabled={isDisabled}
        style={getCellStyle(index, marked)}
        onClick={() => {
          toggleMark(index);
        }}
      >
        {word}
      </button>
    );
  });

  return (
    <main className="container" style={pageWrapStyle}>
      <h2 style={titleStyle}>Your Bingo Card</h2>
      <p style={subtitleStyle}>Click a square when it happens during the game!</p>

      <div style={controlsStyle}>
        <Link to="/bingo-settings" className="btn btn-outline-dark">
          Back to Settings
        </Link>

        <button type="button" className="btn btn-dark" onClick={clearMarks}>
          Clear Marks
        </button>
      </div>

      <div style={gridWrapStyle}>
        <div style={gridStyle}>{cardButtonElements}</div>
      </div>

      <div style={statusWrapStyle}>
        <p className="fw-bold mb-1">Progress:</p>
        <p className={statusClassName} style={{ marginBottom: "0px" }}>
          {statusText}
        </p>
        <div>
          <span style={badgeStyle}>Marked: {markedCount}/25</span>
        </div>
      </div>
    </main>
  );
}

export default BingoPage;