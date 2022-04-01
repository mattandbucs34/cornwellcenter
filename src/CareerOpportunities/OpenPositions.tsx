import _ from 'lodash'
import React, { Fragment } from 'react'
import { PositionInfoType } from './positionInfo'

const OpenPositions = ({title, description, responsibilities, requirements}: PositionInfoType) => {

  function displayList(list: Array<string>) {
    return (
      _.map(list, (item) => {
        return <li key={item}>{item}</li>
      })
    )
  }

  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>Primary Responsibilities:</p>
        <ul>
          {displayList(responsibilities)}
        </ul>
      </div>
      <div>
        <p>Requirements</p>
        <ul>
          {displayList(requirements)}
        </ul>
      </div>
    </Fragment>
  )
}

export default OpenPositions