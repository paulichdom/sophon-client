import React from 'react';
import { Layout, theme } from 'antd';
import Breadcrumbs from './Breadcrumbs';
import Sidebar from '../Sidebar/Sidebar';

const { Content } = Layout;

const MainContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        padding: '0 48px',
        maxWidth: 1100,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'initial',
      }}
    >
      <Breadcrumbs />
      <Layout
        style={{
          padding: '24px 0',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Content style={{padding: '0 24px', minHeight: 280}}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({length: 100}, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br/>
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Sidebar/>
      </Layout>
    </Content>
  );
};

export default MainContent;
