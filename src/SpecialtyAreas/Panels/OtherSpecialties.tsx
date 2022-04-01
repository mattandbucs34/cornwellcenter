import _ from 'lodash';
import React from 'react';
import { otherSpecialties } from '../constants';

const OtherSpecialties = () => {
  function displayList() {
    return (
      _.map(otherSpecialties, (item, index) => {
        return (
          <li key={item}>{item}</li>
        );
      })
    );
  }

  return (
    <ul>
      {displayList()}
    </ul>
  );
}

export default OtherSpecialties;