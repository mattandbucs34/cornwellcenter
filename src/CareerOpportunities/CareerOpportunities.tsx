import _ from 'lodash';
import React from 'react';
import OpenPositions from './OpenPositions';
import { positionInfo } from './positionInfo';

const CareerOpportunities = () => {

  function displayOpenPositions() {
    return (
      _.map(positionInfo, (position, index) => {
        return (
          <OpenPositions
            key={index}
            title={position.title} 
            description={position.description} 
            responsibilities={position.responsibilities}
            requirements={position.requirements}
          />
        )
      })
    )
  }

  return (
    <div>
      <h2>Career Opportunities</h2>
      <div>
        {displayOpenPositions()}
      </div>
    </div>
  );
};
;
export default CareerOpportunities;