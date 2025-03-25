import React, { useState } from 'react';
import './ExpandCollapseControl.scss'
const ExpandCollapseControl = ({ title, id, children, category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={toggleExpandCollapse} className={category} >
        {title} {isExpanded ? '-' : '+'}
      </div>
      {isExpanded && <div className=''><h5> {children}</h5></div>}
    </div>
  );
};

export default ExpandCollapseControl;

