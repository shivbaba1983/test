import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import './ExpandCollapse.scss'
import RowHeaders from './../data/RowHeaders.json';
const ExpandCollapse = ({ leftright, data, selectedId }) => {
    const [tiles, setTiles] = useState(leftright === "L" ? data : data);
    const [rowHeaders, setRowHeaders] = useState(RowHeaders);
    useEffect(() => {
        setTiles(data)
    }, [data]);

    useEffect(() => {
        setExpandedId(null);
    }, []);

    useEffect(() => {
        if (selectedId > 0) {
            setExpandedId(selectedId);
        }
        else {
            setExpandedId(null);
        }
    }, [selectedId]);

    const [expandedId, setExpandedId] = useState(null);

    const toggleItem = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="tile-grid-expand-collapse-section">
            {tiles.map((item) => (
                <div key={item.id} className="tile-section">
                    {/* <div
                        onClick={() => toggleItem(item.id)}
                        
                    >
                        <div className={item.category}>{item.marathiTitle}</div>
                        {expandedId === item.id ? <ChevronUp /> : <ChevronDown />}
                    </div> */}

                    <div onClick={() => toggleItem(item.id)} className={item.yojanaCategory}>
                        {item.marathiTitle} {expandedId === item.id ? '-' : '+'}
                    </div>

                    {expandedId === item.id && (
                        <div key={item.id} className="yojana-description-section">
                            <p><span className="row-header">{rowHeaders.yojanaDescription}:</span>{item.yojanaDescription} </p>
                            <p><span className="row-header">{rowHeaders.forWhom}:</span>{item.forWhom}</p>
                            <p><span className="row-header">{rowHeaders.purpose}:</span>{item.purpose}</p>
                            <p><span className="row-header">{rowHeaders.benefit}:</span>{item.benefit}</p>
                            <p><span className="row-header">{rowHeaders.readMoreInformation}:</span><a href={item.yojanaReadmoreCta} target="_blank" rel="noopener noreferrer">अधिक माहिती...</a></p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ExpandCollapse;