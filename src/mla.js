import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ReactList from "react-list";

class Mla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      resource: [
        "Website",
        "Book",
        "Journal",
        "DVD, Video, Or Film",
        "Archive Material",
        "Artwork",
        "Blog",
        "E-Book Or PDF",
        "Broadcast",
        "Chapter of an Edited Book",
        "Conference Preceeding",
        "Edited Book",
        "Court Case",
        "Dictionary Entry",
        "Dissertation",
        "Email",
        "Encyclopedia Article",
        "Government Publication",
        "Interview",
        "Journal",
        "Magazine",
        "Music Or Recording",
        "Newspaper",
        "Online Image Or Video",
        "Patent",
        "Podcast",
        "Presentation",
        "Press Release",
        "Religious Text",
        "Report",
        "Software",
        "Website",
      ],
    };
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  listItems() {
    let resource = this.state.resource;
    return (
      <ul>
        {resource.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="panel">
        <ButtonGroup>
          {" "}
          {this.state.resource.map((item) => (
            <button className="button" key={item}>
              {item}
            </button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

export default Mla;
