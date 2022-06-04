import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <section>
      <div className="ui embed">
        <iframe title="video player" src={videoSRC} frameBorder="0"></iframe>
      </div>
      <figure className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </figure>
    </section>
  );
};

export default VideoDetail;
