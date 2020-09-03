import React, { useState, Text } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";
import Mla from "./citationtypes/MLA.js";
import Apa from "./citationtypes/APA.js";
import Chicago from "./citationtypes/ChicagoA";
import Harvard from "./citationtypes/Harvard";
import Ieee from "./citationtypes/IEEE";
import Acs from "./citationtypes/ACS";
import Ama from "./citationtypes/AMA";
import Apsa from "./citationtypes/APSA";
import { Form, Input, Button, Radio, Select } from "antd";
import { Divider } from "antd";

class Citation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Tabs: [
        " ",
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
        "APSA",
      ],
      tabs: false,
      apa: false,
      mla: false,
      itemSelected: "",
      chi: false,
      harvard: false,
      ieee: false,
      ama: false,
      acs: false,
      apsa: false,
      selected: "",
    };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     itemSelected: event.target.value,
  //   });
  //   console.log(event.target.value);
  //   console.log(this.state.itemSelected);
  //   this.setStatesAll(this.state.itemSelected);
  // };
  setStatesAll = ({ target: { value: item } }) => {
    this.setState({
      selected: item,
    });
    console.log(item);
    if (item == "APA") {
      this.setState({ apa: true });
    } else if (item == "MLA") {
      this.setState({ mla: true });
    } else if (item == "Chicago A") {
      this.setState({ chi: true });
    } else if (item == "Harvard") {
      this.setState({ harvard: true });
    } else if (item == "IEEE") {
      this.setState({ ieee: true });
    } else if (item == "AMA") {
      this.setState({ ama: true });
    } else if (item == "ACS") {
      this.setState({ acs: true });
    } else if (item == "APSA") {
      this.setState({ apsa: true });
    }
  };

  render() {
    const { tabs } = this.state;
    return (
      <div>
        <div className="body">
          <h1 className="header">
            <img className="logo" src={"./citation.png"} alt="Logo" />
            Citation Widget{" "}
          </h1>
          <Divider />
          <p>Please Select Citation Style</p>{" "}
          <div>
            <select
              ref="fieldInput"
              className="select-source"
              id="source"
              name="source"
              value={this.state.selected}
              onChange={this.setStatesAll}
            >
              {this.state.Tabs.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <Divider />
            <div>{this.state.apa && <Apa />}</div>
            <div>{this.state.mla && <Mla />}</div>
            <div>{this.state.chi && <Chicago />}</div>
            <div>{this.state.harvard && <Harvard />}</div>
            <div>{this.state.ieee && <Ieee />}</div>
            <div>{this.state.ama && <Ama />}</div>
            <div>{this.state.acs && <Acs />}</div>
            <div>{this.state.apsa && <Apsa />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Citation;
