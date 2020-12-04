import React from "react";
import Tag from "./tag";
import "./styles.scss";
import { newLine } from "../../utils/newLine";

const ArtistPreview = ({ name, imgUrl, tags, info }) => {
  const textArray = newLine(info);
  return (
    <section className="artist-info-container">
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} />
      <h3>Description:</h3>
      {textArray.map((string, idx) => {
        return <p key={idx}>{string}</p>;
      })}

      <ul className="artist-tags">
        {tags.map((tag) => (
          <Tag>{tag.name}</Tag>
        ))}
      </ul>
    </section>
  );
};

export default ArtistPreview;
