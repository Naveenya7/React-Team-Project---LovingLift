// FAQ.js

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: 'How do I raise funds?',
      answer: 'To raise funds, follow these steps:\n1. Sign up on our platform.\n2. Create a compelling fundraising campaign with a detailed description.\n3. Share your campaign on social media and other platforms to reach a wider audience.',
      isOpen: false
    },
    {
      question: 'Can I raise funds for a friend as well?',
      answer: 'Yes, you can raise funds for a friend. Simply create a campaign and mention that you are raising funds on behalf of your friend. Make sure to provide accurate information and details about the person for whom you are fundraising.',
      isOpen: false
    },
    {
      question: 'How can I track my fundraising progress?',
      answer: 'You can easily track your fundraising progress by logging into your account. Navigate to your campaign dashboard, where you will find detailed statistics, including the amount raised, the number of donors, and the remaining time for your campaign.',
      isOpen: false
    },
    {
      question: 'Are there any fees associated with fundraising?',
      answer: 'Yes, there may be fees associated with fundraising. Our platform charges a small percentage of the total amount raised to cover transaction and operational costs. However, these fees are transparent and will be clearly displayed when setting up your campaign.',
      isOpen: false
    },
    {
      question: 'Is it safe?',
      answer: 'Yes, our platform takes security seriously. We use industry-standard security measures to protect your personal information and ensure a secure fundraising environment. All financial transactions are encrypted to safeguard your data.',
      isOpen: false
    },
    {
      question: 'I have more questions, who do I write to?',
      answer: 'If you have additional questions or need further assistance, please contact our support team at support@lovinglift.com. We are here to help and will respond to your inquiries as quickly as possible.',
      isOpen: false
    }
    
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <div className='faq-container'>
      <h2>Frequently Asked Questions</h2>
      {faqItems.map((item, index) => (
        <div className='faq-item' key={index}>
          <div className={`faq-question ${item.isOpen ? 'open' : ''}`} onClick={() => toggleAnswer(index)}>
            <h3>{item.question}</h3>
          </div>
          {item.isOpen && <p className='faq-answer'>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
