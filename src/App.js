import { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onInputSubmit("panda fight");
  }

  onInputSubmit = async (userInput) => {
    const res = await youtube.get("/search", {
      params: {
        q: userInput,
      },
    });

    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onInputSubmit={this.onInputSubmit} />
        <section className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
