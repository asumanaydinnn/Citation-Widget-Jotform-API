import React, { useState, Component, Text } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import { Form, Input, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { Divider } from "antd";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      title: "",
      year: "",
      journal: "",
      url: "",
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
    const titleOfBook = this.state.title;
    const yearOf = this.state.year;
    const journal = this.state.journal;
    const url = this.state.url;
    const finish = this.state.finish;
    const citation =
      author2 +
      "," +
      author1 +
      ",' " +
      titleOfBook +
      ",'" +
      "in" +
      journal +
      ", Abbrev. " +
      yearOf +
      "[Online]. Available: " +
      url;
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
              name="firstname"
              placeholder="First Name"
              // value={this.state.firstname}
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="title"
              placeholder="Title Of Article"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="journal"
              placeholder="Title of Journal"
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
              name="url"
              placeholder="url"
              onChange={this.handleChange}
            ></Input>
            <Divider />
            <Button type="primary" danger onClick={this.generateCitation}>
              Generate Citation
            </Button>
          </form>
          <Divider />
          <div>
            {this.state.visible && (
              <p>
                {this.state.lastname},{this.state.firstname}.,"
                {this.state.title}" in {this.state.journal}, Abbrev.{" "}
                {this.state.year} [Online]. Available: {this.state.url}.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
