import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const TrackPreview = ({ track, artist, link, img }) => {
  return (
    <section className="track-container">
      <div className="track-text-info">
        <p>
          <i>
            {`"${track}" by `}
            <Link to={`/artist/${artist}`}>
              <strong>{artist}</strong>
            </Link>
          </i>
        </p>

        <span>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              {artist} on Last.fm
            </a>
          ) : null}
        </span>
      </div>
      <div className="track-img-container">
        {img ? (
          <img className="track-image" alt="artist" src={img}></img>
        ) : null}
      </div>
    </section>
  );
};

export default TrackPreview;
