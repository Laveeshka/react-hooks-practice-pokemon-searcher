import React, {useState} from "react";

function Search({onSearch}) {
  //set up controlled input
  const [searchText, setSearchText] = useState("");

  function handleChange(event){
    setSearchText(event.target.value);
    onSearch(prevState => (prevState = searchText));
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name="search" value={searchText} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
