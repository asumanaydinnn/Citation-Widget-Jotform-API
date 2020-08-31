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
      author1: "",
      author2: "",
    };
  }
  handleChange(event) {
    this.setState({
      author1: event.target.value,
    });
  }
  showComponent() {
    return (
      <div>
        <Text>This is the author {this.state.author1}</Text>
      </div>
    );
  }

  render() {
    return (
      <div className="form-part">
        <form>
          <label for="fname">Author 1</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Author 1"
            onKeyUp={this.handleChange.bind(this)}
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
          {/* <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select> */}

          <input
            className="submit"
            type="submit"
            value="Generate"
            onClick={() => this.showComponent()}
          ></input>
        </form>
      </div>
    );
  }
}

export default Website;
