import  { useEffect, useState } from "react";
import './SearchData.scss'
import LeftYojanaDetails from './../data/LeftYojanaDetails.json';
import RightYojanaDetails from './../data/RightYojanaDetails.json';


const SearchData = ({ setLeftSectionData, setRightSectionData }) => {

  const [leftData, setLeftData] = useState(LeftYojanaDetails);
  const [rightData, setRightData] = useState(RightYojanaDetails);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLeftSectionData(filteredLeftData);
    setRightSectionData(filteredRightData);
  }, [])


  const filteredLeftData = leftData.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.englishTitle.toLowerCase().includes(term) ||
      user.marathiTitle.toLowerCase().includes(term)
    );
  });

  const filteredRightData = rightData.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.englishTitle.toLowerCase().includes(term) ||
      user.marathiTitle.toLowerCase().includes(term)
    );
  });

  let combinedFiltered = [...filteredLeftData, ...filteredRightData];

  async function handleSearchClick(event) {
    setLeftSectionData(filteredLeftData);
    setRightSectionData(filteredRightData)
  }
  async function handleClearClick(event) {
    setSearchTerm("");
    setLeftSectionData(LeftYojanaDetails);
    setRightSectionData(RightYojanaDetails)
  }


  async function handleSearchInput(val) {
    setSearchTerm(val);
    setLeftSectionData(filteredLeftData);
    setRightSectionData(filteredRightData)

  }
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name"
        className="input-text-box"
        value={searchTerm}
        // // onChange={(e) => setSearchTerm(e.target.value)}
        onChange={(e) => handleSearchInput(e.target.value)}

      />
      <button onClick={(event)=> handleSearchClick(event)}
        type="button"
        className="btn-search"
        > Search</button>
      <button onClick={(event) => handleClearClick(event)}
        type="button"
        className="btn-clear"
      > Clear</button>
      {/* <ul>
        {combinedFiltered.map((user) => (
          <li key={user.yojanaEnglishTitle} style={{ marginBottom: "10px" }}>
            <strong>{user.yojanaEnglishTitle}</strong> - {user.marathiTitle} - Age: {user.yojanaDescription}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchData;
