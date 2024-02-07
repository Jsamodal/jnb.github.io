import React from 'react'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import List from './weddinglist.json';
import "../index.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    
   
        const results = List.filter((user) => {
          return (
            value &&
            user &&
            user.name.toLocaleLowerCase().includes(value)
        );
  })
  return setResults(results);
}


  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input.toLowerCase()}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};