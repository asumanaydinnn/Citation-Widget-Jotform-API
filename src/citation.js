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
      apa: false,
      mla: false,
      itemSelected: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      author1: event.target.value,
    });
  };
  setStatesAll = (item) => {
    if (item == "APA") {
      this.setState({ apa: true });
    }
  };

  SubmitFunction = () => {
    return window.JFCustomWidget.subscribe("submit", function () {
      var result = {};
      //this part will be used if your field is required. If your widget is required valid
      //property will be expected before form can be submitted
      result.valid = true;
      //this is your field result. You are expected to send value property as string
      result.value = "my precious data";
      window.JFCustomWidget.sendData(result);
      //most probably you will call sendSubmit method
      window.JFCustomWidget.sendSubmit(result);
    });
  };
  render() {
    const { tabs } = this.state;
    return (
      <div className="body">
        <h1 className="header">
          <img className="logo" src={"./citation.png"} alt="Logo" />
          Citation Widget{" "}
        </h1>
        <label for="Source">Source</label>
        <div>
          <select
            ref="fieldInput"
            className="select-source"
            id="source"
            name="source"
          >
            {this.state.Tabs.map((item) => (
              <option
                value={item}
                key={item}
                onClick={() => this.setStatesAll(item)}
              >
                {item}
              </option>
            ))}
          </select>
          <div>{this.state.apa && <Apa />}</div>
          <div>{this.state.mla && <Mla />}</div>
        </div>
      </div>
    );
  }
}

export default Citation;
