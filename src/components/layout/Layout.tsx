import React, { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header/Header';
import Footer from "./Footer.tsx";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AntLayout>
      <Header />
      {children}
      <Footer />
    </AntLayout>
  );
};

export default Layout;
