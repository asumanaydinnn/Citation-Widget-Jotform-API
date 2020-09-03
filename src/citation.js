import React, { useState, Text } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";
import Mla from "./citationtypes/MLA.js";
import Apa from "./citationtypes/APA.js";
import Chicago from "./citationtypes/ChicagoA";
import Harvard from "./citationtypes/Harvard";
import Ieee from "./citationtypes/IEEE";
import Aaa from "./citationtypes/AAA";
import Acs from "./citationtypes/ACS";
import Ama from "./citationtypes/AMA";
import Apsa from "./citationtypes/APSA";
import Nlm from "./citationtypes/NLM";
import Turabian from "./citationtypes/Turabian";
import Vancouver from "./citationtypes/Vancouver";
import Oscola from "./citationtypes/OSCOLA";

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
      chi: false,
      turabian: false,
      harvard: false,
      vancouver: false,
      oscola: false,
      ieee: false,
      ama: false,
      acs: false,
      nlm: false,
      aaa: false,
      apsa: false,
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
    } else if (item == "MLA") {
      this.setState({ mla: true });
    } else if (item == "Chicago A") {
      this.setState({ chi: true });
    } else if (item == "Turabian") {
      this.setState({ turabian: true });
    } else if (item == "Harvard") {
      this.setState({ harvard: true });
    } else if (item == "Vancouver") {
      this.setState({ vancouver: true });
    } else if (item == "OSCOLA") {
      this.setState({ oscola: true });
    } else if (item == "IEEE") {
      this.setState({ ieee: true });
    } else if (item == "AMA") {
      this.setState({ ama: true });
    } else if (item == "ACS") {
      this.setState({ acs: true });
    } else if (item == "NLM") {
      this.setState({ nlm: true });
    } else if (item == "AAA") {
      this.setState({ aaa: true });
    } else if (item == "APSA") {
      this.setState({ apsa: true });
    }
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
          <div>{this.state.chi && <Chicago />}</div>
          <div>{this.state.turabian && <Turabian />}</div>
          <div>{this.state.harvard && <Harvard />}</div>
          <div>{this.state.vancouver && <Vancouver />}</div>
          <div>{this.state.oscola && <Oscola />}</div>
          <div>{this.state.ieee && <Ieee />}</div>
          <div>{this.state.ama && <Ama />}</div>
          <div>{this.state.acs && <Acs />}</div>
          <div>{this.state.nlm && <Nlm />}</div>
          <div>{this.state.aaa && <Aaa />}</div>
          <div>{this.state.apsa && <Apsa />}</div>
        </div>
      </div>
    );
  }
}

export default Citation;
