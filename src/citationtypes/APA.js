import React, { useState, Text, Component } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ReactList from "react-list";
import Book from "../sourceApa/book";
import OnlineImage from "../sourceApa/OnlineImage";
import Film from "../sourceApa/film";
import Journal from "../sourceApa/journal";
import { Divider } from "antd";

class Apa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      resource: [
        " ",
        "Book",
        "Online Image",
        "Journal",
        "Film",
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
      ],
      onlineImage: false,
      book: false,
      journal: false,
      film: false,
      selected: " ",
    };
  }

  setStatesAll = ({ target: { value: item } }) => {
    this.setState({
      selected: item,
    });
    console.log(item);
    if (item == "Online Image") {
      this.setState({ website: true });
    } else if (item == "Book") {
      this.setState({ book: true });
    } else if (item == "Film") {
      this.setState({ film: true });
    } else if (item == "Journal") {
      this.setState({ journal: true });
    }
  };
  render() {
    const { website } = this.state;
    return (
      <div>
        <p>Please Select the source type</p>
        <select
          className="select-source"
          id="source"
          name="source"
          value={this.state.selected}
          onChange={this.setStatesAll}
        >
          {this.state.resource.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <Divider />
        <div>{this.state.website && <OnlineImage />}</div>
        <div>{this.state.book && <Book />}</div>
        <div>{this.state.film && <Film />}</div>
        <div>{this.state.journal && <Journal />}</div>
      </div>
    );
  }
}

export default Apa;
