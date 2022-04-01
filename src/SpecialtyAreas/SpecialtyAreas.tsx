import _ from 'lodash';
import React from 'react';
import style from './specialties.module.scss';
import { specialtyAreas } from './constants';
import Accordian from '../common/Accordian/Accordian';
import SexOffenderTreatmentPanel from './Panels/SexOffenderTreatmentPanel';
import OtherSpecialties from './Panels/OtherSpecialties';

const numOfColumns = 4;
const columnSize = Math.floor(specialtyAreas.length / numOfColumns) + 1;

const SpecialtyAreas = () => {

  function buildListTable() {
    const table: Array<Array<string | null>> = [];
    for(let i = 0; i < numOfColumns; i++) {
      const column: Array<string | null> = [];
      for(let j = 0; j < columnSize; j++) {
        const value: string | null = specialtyAreas[j + (i * columnSize)] ? specialtyAreas[j + (i * columnSize)] : null;
        column.push(value);
      }
      table.push(column);
    }
    return table;
  }
  
  function displaySpecialties() {
    const table: Array<Array<string | null>> = buildListTable();
    return (_.map(table, (row, i) => {
      return (
        <ul key={i}>
          {_.map(row, (item, j) => {
            if(item) {
              return <li key={item}>{item}</li>
            }else {
              return null;
            }
          })}
        </ul>
      ) 
    }))
  }

  return (
    <React.Fragment>
      <section>
      <h3>We Specialize in the Treatment of:</h3>
      <div className={style['list-section']}>
        {displaySpecialties()}
      </div>
      <Accordian title={"Specialized Sexual Offender Assessment and Treatment:"}>
        <SexOffenderTreatmentPanel />
      </Accordian>
      <Accordian title={"Other Specialized Services:"}>
        <OtherSpecialties />
      </Accordian>
      </section>
    </React.Fragment>
  )
}

export default SpecialtyAreas;