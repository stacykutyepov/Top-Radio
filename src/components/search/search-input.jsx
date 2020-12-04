import React, { useState } from "react";
import { connect } from "react-redux";
import { inputsData } from "../../constants/inputs-data";
import "./styles.scss";
import { fetchATrackStart } from "../../redux/tracks/tracks.actions";

const SearchInput = ({ fetchATrackStart }) => {
  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchATrackStart(value);
    setValue("");
  };

  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        className="search-input"
        type="text"
        placeholder={inputsData.search.placeholder}
        value={value}
        onChange={onInputChange}
      />
      <button type="submit" className="search-button">
        {inputsData.search.buttonActionText}
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchATrackStart: (trackName) => dispatch(fetchATrackStart(trackName)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
