import React from 'react';
import { Layout } from 'antd';
import Navigation from './Navigation';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: 1004, width: '100%' }}>
        <Navigation />
      </div>
    </AntHeader>
  );
};

export default Header;
