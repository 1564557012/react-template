import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
};
export default function Head() {
	return <Header style={headerStyle}>这是头</Header>;
}
