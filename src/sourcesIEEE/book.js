import React, { useState, Component, Text } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import { Form, Input, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { Divider } from "antd";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      title: "",
      year: "",
      edition: "",
      city: "",
      publisher: "",
      citation: "",
      visible: false,
      start: "",
      finish: "",
      chapter: "",
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
    const editionOf = this.state.edition;
    const cityOf = this.state.cityOf;
    const publisherOf = this.state.publisher;
    const chapter = this.state.chapter;
    const start = this.state.start;
    const finish = this.state.finish;
    const citation =
      author2.charAt(0) +
      "," +
      author1.charAt(0) +
      "." +
      "Author, " +
      chapter +
      "in " +
      titleOfBook +
      "." +
      editionOf +
      "edition. " +
      cityOf +
      publisherOf +
      "." +
      yearOf;
    (".");
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
              placeholder="Book Title"
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
              name="edition"
              placeholder="Edition"
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="publisher"
              placeholder="Publisher Name "
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="start"
              placeholder="Page From "
              onChange={this.handleChange}
            ></Input>{" "}
            <Input
              type="text"
              id="lname"
              name="finish"
              placeholder="to Page "
              onChange={this.handleChange}
            ></Input>
            <Input
              type="text"
              id="lname"
              name="chapter"
              placeholder="Chapter Title "
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
                {this.state.lastname.charAt(0)},{this.state.firstname.charAt(0)}
                . Author, "{this.state.chapter}" in {this.state.title} (
                {this.state.edition} edition.),{this.state.city},
                {this.state.publisher},(
                {this.state.year}). pp. {this.state.start}-{this.state.finish}.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
