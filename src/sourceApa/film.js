import React, { useState, Component, Text } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import { Form, Input, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { Divider } from "antd";

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      producer: "",
      producerlast: "",
      title: "",
      country: "",
      studio: "",
      year: "",
      dfirstname: "",
      dlastname: "",
      visible: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  generateCitation = () => {
    const producer = this.state.producer;
    const producerlast = this.state.producerlast;
    const title = this.state.title;
    const country = this.state.country;
    const studio = this.state.studio;
    const year = this.state.year;
    const dfirstname = this.state.dfirstname;
    const dlastname = this.state.dlastname;
    const citation =
      producerlast +
      "," +
      producer.charAt(0) +
      " .(Producer), &" +
      dlastname +
      "," +
      dfirstname.charAt(0) +
      ". (Director). (" +
      year +
      "). " +
      title +
      "[Motion picture]" +
      country +
      ": " +
      studio +
      ".";
    console.log(citation);
    this.setState({
      citation: citation,
    });
    const msg = {
      valid: true,
      value: citation,
    };
    this.setState({
      visible: true,
    });
    window.JFCustomWidget.sendData(msg);
  };

  render() {
    //subscribe to form submit event
    return (
      <div>
        <div>
          <form>
            <div>
              <p>Please fill the informations for the citation</p>
            </div>
            <Input
              type="text"
              id="fname"
              name="title"
              placeholder="Title"
              // value={this.state.firstname}
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="producer"
              placeholder="Producer First Name"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="producerlast"
              placeholder="Producer Last Name"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="dfirstname"
              placeholder="Director First Name"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="dlastname"
              placeholder="Director First Name"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="year"
              placeholder="Year"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="country"
              placeholder="Country "
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="studio"
              placeholder="Studio "
              onChange={this.handleChange}
            ></Input>
            <Divider />
            <Button type="primary" danger block onClick={this.generateCitation}>
              Generate Citation
            </Button>
          </form>
          <Divider />
          <div>
            {this.state.visible && (
              <p>
                {this.state.producerlast},{this.state.producer.charAt(0)}
                .(Producer), &{this.state.dlastname},{" "}
                {this.state.dfirstname.charAt(0)}.(Director).( {this.state.year}
                ). {this.state.title} [Motion picture].
                {this.state.counry}: {this.state.studio}.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Film;
