import style from './header.module.scss';
import React, { Dispatch, Fragment, MouseEvent, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import {FaBars} from 'react-icons/fa';

const windowWidth = window.screenX;
const showOnLarge = windowWidth > 968;

const Header = () => {
  const navRef: RefObject<HTMLElement> = useRef(null);
  const [isShown, setIsShown]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

  useEffect(() => {
    console.log(showOnLarge);
    console.log(isShown);
    console.log(navRef.current);
    if(!showOnLarge && isShown && navRef.current) {
      window.addEventListener('click', (e: any) => {
        e.preventDefault();
        if(!(e.target as HTMLElement).contains(navRef?.current)) {
          setIsShown(!isShown);
        }
      })
    }

    return window.removeEventListener('click', () => {});
  }, [isShown])

  function toggleNavDisplay(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsShown(!isShown);
  }

  return (
    <header className={style.header}>
      <div>
        <h1>The Cornwell Center</h1>
        <h3>For Behavioral Health, Inc.</h3>
        {showOnLarge
          && <Fragment>
            <p><a href="tel:3363780708">336-378-0708</a></p>
            <p><a href="mailto:info@thecornwellcenter.com">info@thecornwellcenter.com</a></p>
          </Fragment>
        }
      </div>
      <div className={style.hamburger} onClick={(e: MouseEvent<HTMLDivElement>) => toggleNavDisplay(e)}><FaBars /></div>
      {showOnLarge || isShown ? <Navbar navRef={navRef} /> : <></>}
    </header>
  )
}

export default Header;