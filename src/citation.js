import React, { useState } from "react";
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
    };
  }
  showComponent(item) {
    if (item.indexOf("APA")) {
      console.log(item);
      this.setState({ tabs: !this.state.tabs });
    }
  }
  render() {
    const { tabs } = this.state;

    return (
      <div className="body">
        <h1 className="header">
          <img className="logo" src={"./citation.png"} alt="Logo" />
          Citation Widget{" "}
        </h1>
        <label for="country">Type of Citation</label>
        <select className="select-source" id="country" name="country">
          {this.state.Tabs.map((item) => (
            <option
              value=" "
              key={item}
              onClick={() => this.showComponent(item)}
            >
              {item}
            </option>
          ))}
        </select>
        <div>{this.state.tabs && <Apa />}</div>
      </div>
    );
  }
}

export default Citation;
