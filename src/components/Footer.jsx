import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f1f1f1',
      color: '#555',
    }}>
      <p>© {new Date().getFullYear()} Movie App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
