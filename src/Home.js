import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "./data";

function Home(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{
          zoom: props.scaling,
          color: props.textColor ?? "initial",
          fontFamily: props.readableFont ?? "initial",
          fontSize: 16 + 16 * (props.fontSize / 100),
          textAlign: props.textAlignment,
          lineHeight: 1.2 + 1.2 * (props.lineHeight / 100),
          letterSpacing: 0 + 10 * (props.letterSpacing / 100),
        }}
      >
        <div className="accessiblity-tool">
          <a href="#" onClick={() => setIsDrawerOpen(true)}>
            <i className="fa-solid fa-person"></i>
          </a>
        </div>

        <div className="wrapper">
          <div className="row">
            <h1 className="head">
              Heading 1{/* <div className="pop-up">lorem ipsum</div> */}
            </h1>
            <p>
              <a href="">Lorem ipsum</a> dolor sit amet, consectetur adipiscing
              elit. In finibus nisl nec diam convallis pulvinar. Vestibulum
              iaculis odio felis, sit amet congue leo aliquam ac. Nullam
              dignissim ligula nec nunc sollicitudin vestibulum. Proin
              vestibulum nunc lorem, in consectetur leo fringilla non. Nullam
              sagittis interdum sapien vitae molestie. Donec a orci non turpis
              tincidunt dictum. <a href="">Etiam</a> id quam enim. Proin sit
              amet fermentum enim.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
            <h2>Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. <a href="">Donec</a> a orci non turpis tincidunt
              dictum. Etiam id quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
            <h2>Heading 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet <a href="">fermentum</a> enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a>
              elit. In finibus nisl nec diam convallis pulvinar. Vestibulum
              iaculis odio felis, sit amet congue leo aliquam ac. Nullam
              dignissim ligula nec nunc sollicitudin vestibulum. Proin
              vestibulum nunc lorem, in consectetur leo fringilla non. Nullam
              sagittis interdum sapien vitae molestie. Donec a orci non turpis
              tincidunt dictum. Etiam id quam enim. Proin sit amet fermentum
              enim.
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="row">
            <h2>Heading 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>

        <div className="wrapper">
          {/* <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton> */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box p={2} width="350px" textAlign="center" role="presentation">
              <div className="control">
                <div className="col-3 content-scaling">
                  <div className="desc">Content Scaling</div>
                  <div>
                    <button
                      onClick={(event) => props.handleScaling(event, "-")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <span>
                      {props.scaling === 1
                        ? "default"
                        : ((props.scaling - 1) * 100).toFixed(0) + "%"}
                    </span>
                    <button
                      onClick={(event) => props.handleScaling(event, "+")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-up"></i>
                    </button>
                  </div>
                </div>
                <div
                  className={`col-1 readable-font ${
                    props.readableFont ? "active" : ""
                  } `}
                  onClick={(event) => props.handleReadableFont(event)}
                >
                  <div className="desc">
                    <i className="fa-sharp fa-solid fa-font"></i>
                  </div>
                  <div>Readable Font</div>
                </div>
              </div>

              <div className="control">
                <div
                  className={`col-33 highlight-titles ${
                    props.highlightTitles ? "active" : ""
                  }`}
                  onClick={(event) => props.handleTitleHighlight(event)}
                >
                  <div className="desc">
                    <i className="fa-solid fa-text-width"></i>
                  </div>
                  <div>Highlight titles</div>
                </div>

                <div
                  className={`col-33 highlight-links ${
                    props.highlightLinks ? "active" : ""
                  }`}
                  onClick={(event) =>
                    props.setHighlightLinks(!props.highlightLinks)
                  }
                >
                  <div className="desc">
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div>Highlight Links</div>
                </div>

                <div
                  // className="col-33 text-magnifier"
                  className={`col-33 text-magnifier ${
                    props.textMag ? "active" : ""
                  }`}
                  onClick={(event) => props.setTextMag(!props.textMag)}
                >
                  <div className="desc">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div>Text Magnifier</div>
                </div>
              </div>

              <div className="control">
                <div className="col-3 font-sizing">
                  <div className="desc">Adjust Font Sizing</div>
                  <div>
                    <button
                      onClick={(event) => props.handleFontSize(event, "-")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <span>
                      {props.fontSize === 0
                        ? "default"
                        : props.fontSize.toFixed(0) + "%"}
                    </span>
                    <button
                      onClick={(event) => props.handleFontSize(event, "+")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-up"></i>
                    </button>
                  </div>
                </div>
                <div
                  className={`col-1 readable-font ${
                    props.textAlignment === "center" ? "active" : ""
                  } `}
                  onClick={(event) => {
                    if (props.textAlignment !== "center") {
                      props.setTextAlignment("center");
                    } else {
                      props.setTextAlignment("");
                    }
                  }}
                >
                  <div className="desc">
                    <i className="fa-solid fa-align-center"></i>
                  </div>
                  <div>Align Center</div>
                </div>
              </div>

              <div className="control">
                <div className="col-3 font-sizing">
                  <div className="desc">Adjust Line Height</div>
                  <div>
                    <button
                      onClick={(event) => props.handleLineHeight(event, "-")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <span>
                      {props.lineHeight === 0
                        ? "default"
                        : props.lineHeight.toFixed(0) + "%"}
                    </span>
                    <button
                      onClick={(event) => props.handleLineHeight(event, "+")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-up"></i>
                    </button>
                  </div>
                </div>
                <div
                  className={`col-1 readable-font ${
                    props.textAlignment === "left" ? "active" : ""
                  } `}
                  onClick={(event) => {
                    if (props.textAlignment !== "left") {
                      props.setTextAlignment("left");
                    } else {
                      props.setTextAlignment("");
                    }
                  }}
                >
                  <div className="desc">
                    <i className="fa-solid fa-align-center"></i>
                  </div>
                  <div>Align Left</div>
                </div>
              </div>

              <div className="control">
                <div className="col-3 font-sizing">
                  <div className="desc">Adjust Letter Spacing</div>
                  <div>
                    <button
                      onClick={(event) => props.handleLetterSpacing(event, "-")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <span>
                      {props.letterSpacing === 0
                        ? "default"
                        : props.letterSpacing.toFixed(0) + "%"}
                    </span>
                    <button
                      onClick={(event) => props.handleLetterSpacing(event, "+")}
                    >
                      <i className="fa-sharp fa-solid fa-chevron-up"></i>
                    </button>
                  </div>
                </div>
                <div
                  className={`col-1 readable-font ${
                    props.textAlignment === "right" ? "active" : ""
                  } `}
                  onClick={(event) => {
                    if (props.textAlignment !== "right") {
                      props.setTextAlignment("right");
                    } else {
                      props.setTextAlignment("");
                    }
                  }}
                >
                  <div className="desc">
                    <i className="fa-solid fa-align-center"></i>
                  </div>
                  <div>Align Right</div>
                </div>
              </div>
            </Box>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default Home;
