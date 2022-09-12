import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { useEffect, useState } from "react";
import { modalClasses } from "@mui/material";

function App() {
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [contrast, setContrast] = useState("");

  const [scaling, setScaling] = useState(1);
  const [readableFont, setReadableFont] = useState();
  const [highlightTitles, setHighlightTitles] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [textMag, setTextMag] = useState(false);
  const [fontSize, setFontSize] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textAlignment, setTextAlignment] = useState("");

  function popUp(event) {
    console.log(event.target.nodeName);
    // debugger;
    // if (event.target.nodeName === "DIV") {
    // } else if (event.target.nodeName === "P") {
    // }

    document.querySelector(".pop-up")?.remove();

    if (
      event.target.nodeName === "P" ||
      event.target.nodeName === "H1" ||
      event.target.nodeName === "H2"
    ) {
      console.log();
      event.target.insertAdjacentHTML(
        "beforeend",
        `<div class='pop-up'>${event.target.textContent}</div>`
      );
    }
  }

  useEffect(() => {
    if (textMag) {
      console.log("mag");
      document.body.addEventListener("mouseover", popUp);
    } else {
      console.log("remove");
      document.body.removeEventListener("mouseover", popUp);
    }
  }, [textMag]);

  useEffect(() => {
    if (highlightLinks) {
      document.querySelectorAll("a").forEach((item) => {
        item.style.border = "2px solid #000";
      });
    } else {
      document.querySelectorAll("a").forEach((item) => {
        item.style.border = "initial";
      });
    }
  }, [highlightLinks]);

  useEffect(() => {
    if (highlightTitles) {
      document.querySelectorAll("h1").forEach((item) => {
        item.style.border = "2px solid #000";
      });

      document.querySelectorAll("h2").forEach((item) => {
        item.style.border = "2px solid #000";
      });
    } else {
      document.querySelectorAll("h1").forEach((item) => {
        item.style.border = "initial";
      });

      document.querySelectorAll("h2").forEach((item) => {
        item.style.border = "initial";
      });
    }
  }, [highlightTitles]);

  function handleLetterSpacing(event, operation) {
    console.log("aa");
    if (operation === "+") {
      setLetterSpacing(letterSpacing + 10);
    } else if (operation === "-") {
      setLetterSpacing(letterSpacing - 10);
    } else {
      setLetterSpacing(0);
    }
  }

  function handleLineHeight(event, operation) {
    console.log("aa");
    if (operation === "+") {
      setLineHeight(lineHeight + 10);
    } else if (operation === "-") {
      setLineHeight(lineHeight - 10);
    } else {
      setLineHeight(1);
    }
  }

  function handleFontSize(event, operation) {
    console.log("aa");
    if (operation === "+") {
      setFontSize(fontSize + 10);
    } else if (operation === "-") {
      setFontSize(fontSize - 10);
    } else {
      setFontSize(1);
    }
  }

  function handleScaling(event, operation) {
    console.log("aa");
    if (operation === "+") {
      setScaling(scaling + 0.1);
    } else if (operation === "-") {
      setScaling(scaling - 0.1);
    } else {
      setScaling(1);
    }
  }

  function handleReadableFont(event) {
    console.log("rf");
    if (!readableFont) {
      setReadableFont("Arial");
    } else {
      setReadableFont("");
    }
  }

  function handleTitleHighlight() {
    console.log("!@");
    setHighlightTitles(!highlightTitles);
  }

  //

  return (
    <Home
      handleScaling={handleScaling}
      scaling={scaling}
      setScaling={setScaling}
      readableFont={readableFont}
      handleReadableFont={handleReadableFont}
      highlightTitles={highlightTitles}
      handleTitleHighlight={handleTitleHighlight}
      highlightLinks={highlightLinks}
      setHighlightLinks={setHighlightLinks}
      textMag={textMag}
      setTextMag={setTextMag}
      fontSize={fontSize}
      setFontSize={setFontSize}
      handleFontSize={handleFontSize}
      textAlignment={textAlignment}
      setTextAlignment={setTextAlignment}
      lineHeight={lineHeight}
      setLineHeight={setLineHeight}
      handleLineHeight={handleLineHeight}
      letterSpacing={letterSpacing}
      setLetterSpacing={setLetterSpacing}
      handleLetterSpacing={handleLetterSpacing}
    />
  );
}

export default App;
