import React, { useEffect } from "react";
import TrackPreview from "../shared/track-preview";
import "./styles.scss";
import { connect } from "react-redux";
import { LIMIT } from "../../constants/limit-tracks";
import { fetchTracksStart } from "../../redux/tracks/tracks.actions";
import ErrorMsg from "../shared/error-msg";

const Main = ({ fetchTracksStart, tracks, error }) => {
  useEffect(() => {
    fetchTracksStart();
  }, [fetchTracksStart]);
  return (
    <section className="main-container">
      <h3>Top {LIMIT} Tracks from Last FM</h3>
      {error ? <ErrorMsg /> : null}

      {!tracks.length
        ? null
        : tracks.map((track, idx) => {
            return (
              <TrackPreview
                track={track.name}
                artist={track.artist.name}
                link={track.artist.url}
                img={track.image[1]["#text"]}
                key={idx}
              />
            );
          })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  tracks: state.tracks.tracks,
  error: state.tracks.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracksStart: () => dispatch(fetchTracksStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
