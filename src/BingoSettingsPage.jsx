import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function toTitleCase(word) {
  if (!word) {
    return word;
  }
  if (word.length === 0) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function BingoSettingsPage() {
  var navigate = useNavigate();

  var [football, setFootball] = useState(false);
  var [commercials, setCommercials] = useState(false);
  var [halftime, setHalftime] = useState(false);

  var [difficulty, setDifficulty] = useState("medium");
  var [customWord, setCustomWord] = useState("");

  var [showError, setShowError] = useState(false);

  function selectedCategories() {
    var cats = [];
    if (football) {
      cats.push("football");
    }
    if (commercials) {
      cats.push("commercials");
    }
    if (halftime) {
      cats.push("halftime");
    }
    return cats;
  }

  function validate() {
    var cats = selectedCategories();
    if (cats.length === 0) {
      setShowError(true);
      return false;
    }
    setShowError(false);
    return true;
  }

  function resetForm() {
    setFootball(false);
    setCommercials(false);
    setHalftime(false);
    setDifficulty("medium");
    setCustomWord("");
    setShowError(false);
  }

  function onSubmit(e) {
    e.preventDefault();

    var ok = validate();
    if (!ok) {
      return;
    }

    // send settings to /bingo via query params
    var cats = selectedCategories();
    var params = new URLSearchParams();

    var i = 0;
    while (i < cats.length) {
      params.append("category", cats[i]);
      i = i + 1;
    }

    params.set("difficulty", difficulty);

    var trimmed = customWord.trim();
    if (trimmed.length > 0) {
      params.set("customWord", trimmed);
    }

    navigate("/bingo?" + params.toString());
  }

  useEffect(function () {
    // keeps error updated when user checks boxes
    if (showError) {
      validate();
    }
  }, [football, commercials, halftime]);

  // summary text
  var catsForSummary = selectedCategories();
  var categoriesSummary = "Categories: none";
  if (catsForSummary.length > 0) {
    var nice = [];
    var j = 0;
    while (j < catsForSummary.length) {
      nice.push(toTitleCase(catsForSummary[j]));
      j = j + 1;
    }
    categoriesSummary = "Categories: " + nice.join(", ");
  }

  var difficultySummary = "Difficulty: " + toTitleCase(difficulty);

  var customSummary = "Custom: none";
  var trimmedCustom = customWord.trim();
  if (trimmedCustom.length > 0) {
    customSummary = "Custom: " + trimmedCustom;
  }

  return (
    <div>
      {/* component styles to match your nicer HTML version */}
      <style>{`
        .settings-card { max-width: 820px; border-radius: 18px; }
        .form-help { color: #6c757d; font-size: 0.95rem; }
        .chip { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 0.85rem; border: 1px solid #dee2e6; border-radius: 999px; background: #fff; cursor: pointer; user-select: none; transition: transform 120ms ease, border-color 120ms ease, background 120ms ease; }
        .chip:hover { transform: translateY(-1px); }
        .chip input { cursor: pointer; }
        .summary-pill { display: inline-block; padding: 0.35rem 0.75rem; border-radius: 999px; border: 1px solid #dee2e6; background: #f8f9fa; font-weight: 600; }
      `}</style>

      <main className="container my-5">
        <div className="mx-auto card shadow-sm p-4 p-md-5 settings-card">
          <div className="mb-4">
            <h2 className="mb-1">Customize Your Bingo Card</h2>
            <p className="form-help mb-0">Pick what you care about, then generate your bingo card.</p>
          </div>

          <form onSubmit={onSubmit} noValidate>
            <fieldset className="mb-4">
              <legend className="h5 mb-2">Buzzword Categories</legend>
              <p className="form-help mb-3">Choose at least one category.</p>

              <div className="d-flex flex-wrap gap-2">
                <label className="chip">
                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    checked={football}
                    onChange={function (e) {
                      setFootball(e.target.checked);
                    }}
                  />
                  <span>Football moments</span>
                </label>

                <label className="chip">
                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    checked={commercials}
                    onChange={function (e) {
                      setCommercials(e.target.checked);
                    }}
                  />
                  <span>Commercials</span>
                </label>

                <label className="chip">
                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    checked={halftime}
                    onChange={function (e) {
                      setHalftime(e.target.checked);
                    }}
                  />
                  <span>Halftime show</span>
                </label>
              </div>

              <div className={"text-danger mt-2" + (showError ? "" : " d-none")}>
                Please select at least one category.
              </div>
            </fieldset>

            <div className="mb-4">
              <label htmlFor="difficulty" className="form-label h5">
                Bingo difficulty
              </label>
              <select
                id="difficulty"
                className="form-select"
                value={difficulty}
                onChange={function (e) {
                  setDifficulty(e.target.value);
                }}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <div className="form-help mt-2">Easy = common moments • Hard = rarer moments</div>
            </div>

            <div className="mb-4">
              <label htmlFor="customWord" className="form-label h5">
                Optional custom buzzword
              </label>
              <input
                type="text"
                id="customWord"
                className="form-control"
                maxLength={30}
                placeholder="Type a word or phrase (max 30 chars)"
                value={customWord}
                onChange={function (e) {
                  setCustomWord(e.target.value);
                }}
              />
              <div className="form-help mt-2">
                Example: “Dog in a commercial” or “Crazy halftime outfit”
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex flex-wrap align-items-center gap-2">
                <span className="summary-pill">{categoriesSummary}</span>
                <span className="summary-pill">{difficultySummary}</span>
                <span className="summary-pill">{customSummary}</span>
              </div>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <button className="btn btn-dark" type="submit">
                Generate Bingo Card
              </button>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}