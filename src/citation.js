import React, { useState, Text } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";
import Mla from "./mla.js";
import Apa from "./apa.js";

class Citation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Tabs: [
        "APA",
        "MLA",
        "Chicago A",
        "Turabian",
        "Harvard",
        "Vancouver",
        "OSCOLA",
        "IEEE",
        "AMA",
        "ACS",
        "NLM",
        "AAA",
        "APSA",
      ],
      tabs: false,
      author1: "",
    };
  }
  handleChange(event) {
    this.setState({
      author1: event.target.value,
    });
  }
  showComponent() {
    return (
      <div>
        <Text>This is the author {this.state.author1}</Text>
      </div>
    );
  }
  SubmitFunction() {
    window.JFCustomWidget.subscribe("submit", function () {
      if (this.state.author1 != null) {
        window.JFCustomWidget.sendSubmit(this.state.author1);
      } else {
        window.JFCustomWidget.sendData("Empty citation");
      }
    });
  }
  render() {
    const { tabs } = this.state;
    window.JFCustomWidget.subscribe("ready", function () {
      console.log("The widget is ready");
    });
    return (
      <div className="body">
        <h1 className="header">
          <img className="logo" src={"./citation.png"} alt="Logo" />
          Citation Widget{" "}
        </h1>
        <div className="form-part">
          <form>
            <label for="fname">Author 1</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Author 1"
              onKeyUp={this.handleChange.bind(this)}
            ></input>
          </form>
        </div>
        <h1>this is the author: {this.state.author1}</h1>
        <input
          className="submit"
          type="submit"
          value="Generate"
          onClick={() => this.SubmitFunction()}
        ></input>
      </div>
    );
  }
}

export default Citation;
