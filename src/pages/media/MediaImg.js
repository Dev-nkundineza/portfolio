import React, { Component } from "react";

export default class MediaImg extends Component {
  render() {
    return (
      <img
        src={require("../../assests/images/Conferences/Usenix/main.jpeg")}
        alt="Media and Conferences"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px"
        }}
      />
    );
  }
}
