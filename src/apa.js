import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ReactList from "react-list";
import Website from "./website";

class Apa extends React.Component {
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
      website: false,
      book: false,
      journal: false,
      DVD: false,
    };
  }
  showComponent(item) {
    if (item.indexOf(this.state.resource[1])) {
      console.log(item);
      this.setState({ website: !this.state.website });
    }
  }

  render() {
    const { website } = this.state;
    return (
      <div>
        <label for="country">Source</label>
        <select className="select-source" id="country" name="country">
          {this.state.resource.map((item) => (
            <option
              value=" "
              key={item}
              onClick={() => this.showComponent(item)}
            >
              {item}
            </option>
          ))}
        </select>
        <div>{this.state.website && <Website />}</div>
      </div>
    );
  }
}

export default Apa;
