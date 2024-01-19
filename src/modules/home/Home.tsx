import React from 'react';
import Section1 from './sections/section1/Section1';
import Section2 from './sections/section2/Section2';

const Home = () => {
  return (
    <div className='p-3'>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
