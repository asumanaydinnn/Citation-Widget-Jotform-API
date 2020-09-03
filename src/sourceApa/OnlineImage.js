import React, { useState, Component, Text } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import { Form, Input, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { Divider } from "antd";

class OnlineImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      title: "",
      type: "",
      url: "",
      date: "",
      citation: "",
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
    const author1 = this.state.firstname;
    const author2 = this.state.lastname;
    const titleOfImage = this.state.title;
    const date = this.state.date;
    const type = this.state.type;
    const url = this.state.url;
    const citation =
      author2 +
      "," +
      author1.charAt(0) +
      " .(" +
      date +
      "). " +
      titleOfImage +
      " [" +
      type +
      "] " +
      url +
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
              name="type"
              placeholder="Type. E.g. Photography, Illustration etc."
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="url"
              placeholder="URL"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="firstname"
              placeholder="Creator First Name"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Creator Last Name"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="date"
              placeholder="Publication Date. E.g. 1996, October 21 "
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
                {this.state.lastname},{this.state.firstname.charAt(0)}. (
                {this.state.date}).
                {this.state.title} [{this.state.type}]. {this.state.url}.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineImage;
