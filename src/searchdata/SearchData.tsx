import { useEffect, useState } from "react";
import './SearchData.scss'
import LeftYojanaDetails from './../data/LeftYojanaDetails.json';
import RightYojanaDetails from './../data/RightYojanaDetails.json';
import ExpandCollapse from './../expand-collapse/ExpandCollapse';

const SearchData = ({ tempSearchTerm, selectedId }) => {

  const [leftData, setLeftData] = useState(LeftYojanaDetails);
  const [rightData, setRightData] = useState(RightYojanaDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTempData, setFilterData] = useState();

  useEffect(() => {
    setSearchTerm(tempSearchTerm);
  }, [tempSearchTerm])


  useEffect(() => {
    if (tempSearchTerm) {
      const index = LeftYojanaDetails.findIndex((row) => row.id === Number(selectedId));
      if (index !== -1) {
        const selectedRecord = LeftYojanaDetails[index]; // Get the selected record
        const remainingRecords = LeftYojanaDetails.filter((_, i) => i !== index); // Remove it from the array
        setLeftData([selectedRecord, ...remainingRecords]); // Place it at the top
      }
      // const tempLeftData = LeftYojanaDetails.filter((user) => {
      //   const term = searchTerm.toLowerCase();
      //   return (
      //     user.englishTitle.toLowerCase().includes(term) ||
      //     user.marathiTitle.toLowerCase().includes(term)
      //   );
      // });
      // setLeftData(tempLeftData);
    } else {
      //setLeftData(LeftYojanaDetails)
    }
  }, [searchTerm, tempSearchTerm])

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
    setLeftData(filteredLeftData);
    // setRightSectionData(filteredRightData)
  }
  async function handleClearClick(event) {
    setSearchTerm("");
    setLeftData(LeftYojanaDetails);
    //setRightSectionData(RightYojanaDetails)
  }


  async function handleSearchInput(val) {
    setSearchTerm(val);
    setLeftData(filteredLeftData);
    //setRightSectionData(filteredRightData)

  }

  return (
    <div>

      <div className="main-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name"
            className="input-text-box"
            value={searchTerm}
            // // onChange={(e) => setSearchTerm(e.target.value)}
            onChange={(e) => handleSearchInput(e.target.value)}

          />
          <button onClick={(event) => handleSearchClick(event)}
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
        <div className="left-section">
          <ExpandCollapse leftright={"L"} data={leftData}  selectedId={selectedId}/>
        </div>


        {/* <div className="right-section">
<ExpandCollapse leftright={"R"} data={rightSectionData} />

</div> */}

      </div>
    </div>

  );
};

export default SearchData;
