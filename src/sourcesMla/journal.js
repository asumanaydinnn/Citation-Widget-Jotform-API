import React, { useState, Component, Text } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import { Form, Input, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { Divider } from "antd";

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      title: "",
      year: "",
      journal: "",
      start: "",
      finish: "",
      doi: "",
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
    const start = this.state.start;
    const finish = this.state.finish;
    const doi = this.state.doi;
    const citation =
      author2 + "," + author1 + " ' " + titleOfBook + " '" + journal + "pp.";
    " ," + start + "-" + finish + ", doi:" + doi;
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
              placeholder="Author 1"
              // value={this.state.firstname}
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Author 2"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="title"
              placeholder="Article Title"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="journal"
              placeholder="Journal Title"
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
              name="start"
              placeholder="Page From"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="finish"
              placeholder="To Page"
              onChange={this.handleChange}
            ></Input>

            <Input
              type="text"
              id="lname"
              name="year"
              placeholder=" Publication Date "
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="doi"
              placeholder="DOI"
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
                {this.state.lastname}, {this.state.firstname}."
                {this.state.title}. {this.state.journal},{this.state.year},pp.{" "}
                {this.state.start}-{this.state.finish}. doi:{this.state.doi};
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Journal;
