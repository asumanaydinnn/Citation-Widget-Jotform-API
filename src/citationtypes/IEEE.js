import React, { useState, Text, Component } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ReactList from "react-list";
import Book from "../sourcesIEEE/book";
import Article from "../sourcesIEEE/patent";
import Film from "../sourcesIEEE/film";
import { Divider } from "antd";

class Ieee extends React.Component {
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
        "Article",
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
      article: false,
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
    } else if (item == "Article") {
      this.setState({ article: true });
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
        <div>{this.state.book && <Book />}</div>
        <div>{this.state.film && <Film />}</div>
        <div>{this.state.article && <Article />}</div>
      </div>
    );
  }
}

export default Ieee;
