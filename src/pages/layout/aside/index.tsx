import React from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;
const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
};
export default function index() {
	return <Sider style={siderStyle}>侧边栏</Sider>;
}
