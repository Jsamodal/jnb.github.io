import "../index.css";
import React from 'react'


export const SearchResult = ({ result }) => {

  

  return (
    <div className='Results'>
    <a
      className="search-result"
      href="https://forms.gle/xKTzK9v581AT6Wt69"
      target="blank"
    >
      {result}  
      
    </a>
    
    </div>
    
  );
};