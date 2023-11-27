// Flow.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShareAlt, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import './Flow.css';

const Flow = () => {
  return (
    <div className='flow-container'>
      <h1 className='process-flow-heading'>Process flow</h1>

      <div className='step'>
        <FontAwesomeIcon icon={faUser} className='icon' />
        <h2>Step 1: Start your fundraiser</h2>
        <p>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
      </div>

      <div className='step'>
        <FontAwesomeIcon icon={faShareAlt} className='icon' />
        <h2>Step 2: Share your fundraiser</h2>
        <div className='secondd'>
          <p>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
        </div>
      </div>

      <div className='step'>
        <FontAwesomeIcon icon={faMoneyBillAlt} className='icon' />
        <h2>Step 3: Withdraw Funds</h2>
        <p>The funds raised can be withdrawn without any hassle directly to your bank account.</p>
      </div>
    </div>
  );
};

export default Flow;
