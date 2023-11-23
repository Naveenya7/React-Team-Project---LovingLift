// Cards.js

import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  const theme = 'dark';

  return (
    <div className={`cards teal-background ${theme}-theme`}>
      <h1>Elevate Your Impact by Supporting Various Fundraising Categories!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="Images/homeeducation.png"
              text="Empower students with better education through your support"
              title="Education"
              path='/startafundraiser'
              theme={theme}
            />
            <CardItem
              src="Images/homehealthcare.png"
              text="Improve healthcare access and fund medical breakthroughs."
              title="Health and Medical"
              path='/startafundraiser'
              theme={theme}
            />
            <CardItem
              src="Images/homeenvir.png"
              text="Protect the planet with contributions to environmental conservation."
              title="Environmental Conservation"
              path='/startafundraiser'
              theme={theme}
            />
            <CardItem
              src="Images/homecom.png"
              text="Strengthen communities through local infrastructure projects."
              title="Community Development"
              path='/startafundraiser'
              theme={theme}
            />
            <CardItem
              src="Images/homehuman.png"
              text="Provide aid and relief in times of crisis for those in need."
              title="Humanitarian Aid"
              path='/startafundraiser'
              theme={theme}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
