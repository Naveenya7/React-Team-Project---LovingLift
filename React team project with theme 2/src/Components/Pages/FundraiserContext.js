import { createContext, useContext, useState } from 'react';

const FundraiserContext = createContext();

export const FundraiserProvider = ({ children }) => {
  const [fundraiserData, setFundraiserData] = useState({
    fundraiserName: '',
    goalAmount: '',
    description: '',
    organizerName: '',
    contactEmail: '',
    startDate: '',
    endDate: '',
  });

  const [fundraisersList, setFundraisersList] = useState([]);

  const updateFundraiserData = (data) => {
    setFundraiserData(data);
    setFundraisersList((prevList) => [...prevList, data]);
  };

  return (
    <FundraiserContext.Provider value={{ fundraiserData, fundraisersList, updateFundraiserData }}>
      {children}
    </FundraiserContext.Provider>
  );
};

export const useFundraiser = () => {
  return useContext(FundraiserContext);
};