import React, { Dispatch, Fragment, MouseEvent, SetStateAction, useState } from 'react'
import style from './accordian.module.scss';

type AccordianType = {
  children: any,
  title: string
}

const Accordian = ({children, title}: AccordianType) => {
  const [isShown, setIsShown]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

  function handleAccordianClick(e: MouseEvent) {
    e.preventDefault();
    console.log(e.currentTarget.nextElementSibling);
    setIsShown(!isShown);
  }

  return (
    <Fragment>
      <div className={style.accordian} onClick={(e: MouseEvent) => handleAccordianClick(e)}>
        <h3>{title}</h3>
      </div>
      <div className={`${style['accordian-content']} ${isShown ? style.active : null}`} >
        {children}
      </div>
    </Fragment>
  )
}

export default Accordian;