import React, { useEffect } from "react";
import { connect } from "react-redux";
import ArtistPreview from "./artist-preview";
import { fetchArtistStart } from "../../redux/tracks/tracks.actions";
import "./styles.scss";

const ArtistInfo = ({ match, fetchArtistStart, artistInfo }) => {
  const artist = match.params.id;
  useEffect(() => {
    fetchArtistStart(artist);
  }, [artist, fetchArtistStart]);

  return (
    <section className="artist-container">
      {artistInfo ? (
        <ArtistPreview
          name={artist}
          imgUrl={artistInfo.image[2]["#text"]}
          info={artistInfo.bio.summary}
          tags={artistInfo.tags.tag}
        />
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => ({
  artistInfo: state.tracks.artist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtistStart: (artistName) => dispatch(fetchArtistStart(artistName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
