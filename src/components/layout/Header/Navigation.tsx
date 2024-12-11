import React from 'react';
import { Menu, MenuProps } from 'antd';

const items: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navigation: React.FC = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{ flex: 1, minWidth: 0, maxWidth: 1100 }}
    />
  );
};

export default Navigation;
