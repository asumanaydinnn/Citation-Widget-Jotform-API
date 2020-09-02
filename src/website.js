import React, { useState, Component, Text } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ReactList from "react-list";

class Website extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      author2: "",
      bookName: "",
      year: "",
      edition: "",
      city: "",
      publisher: "",
      page: "",
      citation: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <div className="form-part">
          <form>
            <label for="fname">Author 1</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Author 1"
              // value={this.state.firstname}
              onChange={(this.handleChange, this.changeInput)}
            ></input>
            <label for="lname">Author 2</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Author 2"
            ></input>
            <label for="lname">Book</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Book"
            ></input>
            <label for="lname">Year Published</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Year"
            ></input>
            <label for="lname">Edition</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Edition"
            ></input>
            <label for="lname">City published</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="City published"
            ></input>
            <label for="lname">Publisher</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Publisher Name "
            ></input>
            <label for="lname">Page Range</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Page Range for Citation "
            ></input>
            <h1>{this.state.firstname}</h1>
          </form>
        </div>
      </div>
    );
  }
}

export default Website;
