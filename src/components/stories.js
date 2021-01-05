import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";
import "../App.css";
const fit = require("./fit.png");

class stories extends React.Component {
  render() {
    return (
      <div className="stories">
        <div className="stories-settings">
          <Stories
            loop
            keyboardNavigation
            defaultInterval={8000}
            width={maxWidth}
            height={maxHeight}
            stories={stories2}
            onStoryEnd={(s, st) => console.log("story ended", s, st)}
            onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
            onStoryStart={(s, st) => console.log("story started", s, st)}
          />
        </div>
      </div>
    );
  }
}
console.log(window.innerWidth);
console.log(document.documentElement.clientWidth);
let maxWidth;
let maxHeight;
if (window.innerWidth >= 600) {
  maxWidth = 360;
} else {
  maxWidth = `100vw`;
}
if (window.innerWidth >= 600) {
  maxHeight = 640;
} else {
  maxHeight = window.innerHeight;
}
const Story2 = ({ action, isPaused }) => {
  return (
    <div
      style={{ ...contentStyle, background: "Aquamarine", color: "#16161d" }}
    >
      <h1>CRC is a silent killer </h1>
      <p>
        Silent killers are diseases that can only be felt in the advanced
        stages. Which means that if my blood stain was indeed caused by
        colorectal cancer, it might be Stage III or even Stage IV. <br></br>
        <ul>
          Here are some other facts:
          <li>2 Singaporeans die EACH DAY due to colorectal cancer</li>
          <li>
            More than 50% diagnosed with colorectal cancer have NO symptoms
          </li>
          <li>7% of patients survive Stage IV cancer</li>
        </ul>
      </p>
      <h1>
        {isPaused
          ? "You are taking a long time to read eh"
          : "Stop Considering!!"}
      </h1>
    </div>
  );
};

const stories2 = [
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
          <h1>This free kit might just save your life</h1>
          <p>No need to visit any healthcare clinic</p>
          <p>Completely free of charge</p>

          <img
            style={image}
            src={`${process.env.PUBLIC_URL}/assets/fit.png`}
            alt="images from unsplash"
          ></img>
          <h3>Tap right →</h3>
        </div>
      );
    },
  },
  // first story
  {
    content: ({ action, story }) => {
      return (
        <WithSeeMore story={story} action={action}>
          <div
            style={{
              background: "pink",
              padding: 20,

              height: "100%",
            }}
          >
            <h1 style={{ marginTop: "100%", marginBottom: 0 }}>💩</h1>
            <h1 style={{ marginTop: 5 }}>
              But it kinda need you to prod your poopy hehe{" "}
            </h1>
          </div>
        </WithSeeMore>
      );
    },
    seeMoreCollapsed: ({ toggleMore, action }) => (
      <p style={customSeeMore} onClick={() => toggleMore(true)}>
        Swipe up to learn more
      </p>
    ),
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
    duration: 5000,
  },
  // second story
  {
    url: "https://picsum.photos/1080/1920",
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
  },
  //   {
  //     url:
  //       "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  //     type: "video",
  //   },
  {
    content: Story2,
  },
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
};

export default stories;
