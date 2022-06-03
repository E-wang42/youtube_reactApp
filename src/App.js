import { Component } from "react";
import SearchBar from "./components/SearchBar";

class App extends Component {
  onInputSubmit = (term) => {};

  render() {
    return (
      <div className="ui container">
        <SearchBar onInputSubmit={this.onInputSubmit} />
      </div>
    );
  }
}

export default App;
