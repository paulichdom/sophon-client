import React from 'react';
import Layout from './components/layout/Layout.tsx';
import MainContent from './components/layout/Content/MainContent.tsx';

const App: React.FC = () => {
  return (
    <Layout>
      <MainContent />
    </Layout>
  );
};

export default App;
