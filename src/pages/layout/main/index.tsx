import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};
export default function Main() {
	return <Content style={contentStyle}>Content</Content>;
}
