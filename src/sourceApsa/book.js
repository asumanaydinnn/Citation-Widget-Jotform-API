import React, { useState, Component, Text } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import Button from "react-bootstrap/Button";

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
    const citation =
      author2 +
      "," +
      author1.charAt(0) +
      ".(" +
      yearOf +
      ")." +
      titleOfBook +
      " (" +
      editionOf +
      "st edition.). " +
      publisherOf +
      ".";
    console.log(citation);
    this.setState({
      citation: citation,
    });
    const msg = {
      valid: true,
      value: citation,
    };
    window.JFCustomWidget.sendData(msg);
  };

  render() {
    //subscribe to form submit event
    return (
      <div>
        <div className="form-part">
          <form>
            <label for="fname">Author First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Author 1"
              // value={this.state.firstname}
              onChange={this.handleChange}
            ></input>
            <label for="lname">Author Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Author 2"
              onChange={this.handleChange}
            ></input>
            <label for="lname">Book Title</label>
            <input
              type="text"
              id="lname"
              name="title"
              placeholder="Book Title"
              onChange={this.handleChange}
            ></input>
            <label for="lname">Year Published</label>
            <input
              type="text"
              id="lname"
              name="year"
              placeholder="Year"
              onChange={this.handleChange}
            ></input>
            <label for="lname">Edition</label>
            <input
              type="text"
              id="lname"
              name="edition"
              placeholder="Edition"
              onChange={this.handleChange}
            ></input>
            <label for="lname">Publisher</label>
            <input
              type="text"
              id="lname"
              name="publisher"
              placeholder="Publisher Name "
              onChange={this.handleChange}
            ></input>
            <Button onClick={this.generateCitation}>Send for Submission</Button>
          </form>
          <div>
            <p>
              {this.state.lastname},{this.state.firstname.charAt(0)}.(
              {this.state.year}).{this.state.title}({this.state.edition}st
              edition.).{this.state.publisher}.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
