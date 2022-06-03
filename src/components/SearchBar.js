import React, { Component } from "react";

class SearchBar extends Component {
  state = { userInput: "" };

  onInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onInputSubmit(this.state.userInput);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
