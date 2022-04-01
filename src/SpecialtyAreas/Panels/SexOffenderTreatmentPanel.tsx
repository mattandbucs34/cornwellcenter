import _ from 'lodash';
import React from 'react';
import { sexualOffenderTreatments } from '../constants';

const SexOffenderTreatmentPanel = () => {
  function populateList() {
    return (
      _.map(sexualOffenderTreatments, (item, index) => {
        return (
          <li key={item}>{item}</li>
        );
      })
    );
  }

  return (
    <ul>
      {populateList()}
    </ul>
  );
}

export default SexOffenderTreatmentPanel;