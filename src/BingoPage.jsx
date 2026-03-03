import React, { useMemo, useState } from "react";
import { Link } from "react-router";

/*
  DO NOT CHANGE THESE WORDS TEAM (exact set)
*/
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
  var lines = [];
  var r = 0;

  while (r < 5) {
    lines.push([r * 5 + 0, r * 5 + 1, r * 5 + 2, r * 5 + 3, r * 5 + 4]);
    r = r + 1;
  }

  var c = 0;
  while (c < 5) {
    lines.push([0 * 5 + c, 1 * 5 + c, 2 * 5 + c, 3 * 5 + c, 4 * 5 + c]);
    c = c + 1;
  }

  lines.push([0, 6, 12, 18, 24]);
  lines.push([4, 8, 12, 16, 20]);

  return lines;
}

export default function BingoPage() {
  var lines = useMemo(function () {
    return buildLines();
  }, []);

  var [marked, setMarked] = useState(function () {
    return new Set([FREE_INDEX]);
  });

  function toggleMark(index) {
    if (index === FREE_INDEX) {
      return;
    }

    setMarked(function (prev) {
      var next = new Set(prev);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  }

  function clearMarks() {
    setMarked(new Set([FREE_INDEX]));
  }

  // bingo check (no ternary)
  var hasBingo = false;
  var i = 0;

  while (i < lines.length) {
    var line = lines[i];
    var allMarked = true;

    var j = 0;
    while (j < line.length) {
      if (!marked.has(line[j])) {
        allMarked = false;
      }
      j = j + 1;
    }

    if (allMarked) {
      hasBingo = true;
    }

    i = i + 1;
  }

  var statusText = "No bingo yet — keep watching 👀";
  if (hasBingo) {
    statusText = "BINGO! 🎉 You got it!";
  }

  var statusClass = "text-muted";
  if (hasBingo) {
    statusClass = "fw-bold";
  }

  // Inline styles so nothing can break the layout
  var pageWrap = { paddingTop: "24px", paddingBottom: "24px" };

  var titleStyle = { fontSize: "44px", fontWeight: 800, marginBottom: "6px", textAlign: "center" };
  var subtitleStyle = { textAlign: "center", color: "#6c757d", marginBottom: "18px" };

  var controlsStyle = { display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "22px" };

  var gridWrap = { display: "flex", justifyContent: "center" };

  var gridStyle = {
    width: "min(920px, 100%)",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "14px"
  };

  function cellStyle(index) {
    var base = {
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
      base.background = "#6c757d";
      base.color = "#fff";
      base.borderColor = "#6c757d";
      base.cursor = "not-allowed";
    }

    if (marked.has(index)) {
      base.background = "#212529";
      base.color = "#fff";
      base.borderColor = "#212529";
    }

    if (index === FREE_INDEX) {
      // keep FREE gray even though it’s marked
      base.background = "#6c757d";
      base.color = "#fff";
      base.borderColor = "#6c757d";
    }

    return base;
  }

  var statusWrap = { textAlign: "center", marginTop: "22px" };
  var badgeStyle = {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "999px",
    border: "1px solid #dee2e6",
    background: "#f8f9fa",
    fontWeight: 700,
    marginTop: "10px"
  };

  var markedCount = marked.size;

  return (
    <main className="container" style={pageWrap}>
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

      <div style={gridWrap}>
        <div style={gridStyle}>
          {CARD_WORDS.map(function (word, index) {
            var isDisabled = false;
            if (index === FREE_INDEX) {
              isDisabled = true;
            }

            return (
              <button
                key={index}
                type="button"
                disabled={isDisabled}
                style={cellStyle(index)}
                onClick={function () {
                  toggleMark(index);
                }}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>

      <div style={statusWrap}>
        <p className="fw-bold mb-1">Progress:</p>
        <p className={statusClass} style={{ marginBottom: "0px" }}>
          {statusText}
        </p>
        <div>
          <span style={badgeStyle}>Marked: {markedCount}/25</span>
        </div>
      </div>
    </main>
  );
}