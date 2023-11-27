// browsefundraisers.js
import React from 'react';
import { useFundraiser } from './FundraiserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './BrowseFundraisers.css';

const BrowseFundraisers = () => {
  const { fundraisersList } = useFundraiser();
  const openNewTab = () => {
    navigate('/donate');
  }
  const navigate = useNavigate();

  return (
    <div className="fundraiser-cards-container">
      {fundraisersList.map((fundraiser, index) => (
        <div key={index} className="fundraiser-card">
          <div className="fundraiser-image-container">
            {fundraiser.image && (
              <img
                src={URL.createObjectURL(fundraiser.image)}
                alt={`Fundraiser ${index + 1}`}
                className="fundraiser-image"
              />
            )}
          </div>
          <div className="fundraiser-details">
            <strong>{fundraiser.fundraiserName}</strong> - Goal: {fundraiser.goalAmount}
            <p>Description: {fundraiser.description}</p>
            <p>Organizer: {fundraiser.organizerName}</p>
            <p>Contact Email: {fundraiser.contactEmail}</p>
            <p>Start Date: {fundraiser.startDate}</p>
            <p>End Date: {fundraiser.endDate}</p>
            <button onClick={openNewTab} className="donate-button">Donate</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowseFundraisers;
