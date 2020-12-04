import React from "react";
import { connect } from "react-redux";
import SearchInput from "./search-input";
import TrackPreview from "../shared/track-preview";
import "./styles.scss";

const Search = ({ tracks }) => {
  return (
    <section className="search-container">
      <SearchInput />
      {tracks.map((track, idx) => {
        return (
          <TrackPreview track={track.name} artist={track.artist} key={idx} />
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  tracks: state.tracks.searchedTrack,
});

export default connect(mapStateToProps)(Search);
