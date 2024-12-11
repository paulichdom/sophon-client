import React from 'react';
import { Layout, theme } from 'antd';
import AnchorMenu from './AnchorMenu';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      style={{
        background: colorBgContainer,
        position: 'sticky',
        top: 88,
        height: 'calc(100vh + 88px)',
        overflow: 'auto',
        paddingTop: '24px',
        maxWidth: 1100,
      }}
      width={200}
    >
      <AnchorMenu />
    </Sider>
  );
};

export default Sidebar;
