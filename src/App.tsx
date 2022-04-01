import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import MeetTherapists from './MeetTherapists/MeetTherapists';
import SpecialtyAreas from './SpecialtyAreas/SpecialtyAreas';
import CareerOpportunities from './CareerOpportunities/CareerOpportunities';
import ContactUs from './ContactUs/ContactUs';
import Header from './Header';
import style from './App.module.scss';

function App() {
  return (
    <main className='container'>
      <Header />
      <div className={style.content}>
        <Routes>

          <Route path={'/'} element={<Home />} />
          <Route path={'/therapists'} element={<MeetTherapists />} />
          <Route path={'/specialties'} element={<SpecialtyAreas />} />
          <Route path={'/careers'} element={<CareerOpportunities />} />
          <Route path={'/contact'} element={<ContactUs />} />
        </Routes>

      </div>

    </main>
  );
}

export default App;
