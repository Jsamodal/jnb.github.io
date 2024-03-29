import React from 'react'
import "../index.css";
import  { SearchResult }  from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}

    </div>
  );
};