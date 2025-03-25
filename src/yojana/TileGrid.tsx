import { useEffect, useState } from "react";
import './TileGrid.scss';
import ExpandCollapseControl from '../components/ExpandCollapseControl';

const TileGrid = ({ leftright, data }) => {
    const [tiles, setTiles] = useState(leftright === "L" ? data : data);

    useEffect(() => {
        setTiles(data)
    }, [data]);


    // function getClassName(inputValue) {
    //     let defualtClassName = "Male";

    //     switch (inputValue) {
    //         case "M": {
    //             defualtClassName = "Male";
    //             break;
    //         }
    //         case "F": {
    //             defualtClassName = "Female";
    //             break;
    //         }
    //         case "K": {
    //             defualtClassName = "Farmer";
    //             break;
    //         }
    //         case "H": {
    //             defualtClassName = "Handicapped";
    //             break;
    //         }
    //         case "Unknown": {
    //             defualtClassName = "Unknown";
    //             break;
    //         }
    //         case "Health":{
    //             defualtClassName = "Health";
    //             break;
    //         }
    //         default: {
    //             defualtClassName = "Male";
    //             break;
    //         }
    //     }
    //     return defualtClassName;
    // }
    return (
        <div className="tile-grid-main-section">
            {tiles?.map((tile) => (
                <div key={tile.id} className="tile-section">
                    <ExpandCollapseControl id={tile.id } title={tile.marathiTitle} category={tile.yojanaCategory}>
                        <div key={tile.id} className="">
                            <p>{tile.yojanaDescription} </p>
                            <p><a href={tile.yojanaReadmoreCta} target="_blank" rel="noopener noreferrer">अधिक माहिती...</a></p>
                        </div>
                    </ExpandCollapseControl>
                </div>

            ))}
        </div>

    );
};

export default TileGrid;