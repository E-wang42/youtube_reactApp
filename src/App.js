import { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";

class App extends Component {
  state = { videos: [] };

  onInputSubmit = async (userInput) => {
    const res = await youtube.get("/search", {
      params: {
        q: userInput,
      },
    });

    this.setState({ videos: res.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onInputSubmit={this.onInputSubmit} />I have{" "}
        {this.state.videos.length} Videos
      </div>
    );
  }
}

export default App;
