// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

// import './App.css';

import { StepBackwardOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
function App() {
	// const [count, setCount] = useState(0);

	return (
		<Space wrap>
			<Button type="primary">Primary Button</Button>
			<Button>Default Button</Button>
			<Button type="dashed">Dashed Button</Button>
			<Button type="text">Text Button</Button>
			<Button type="link">Link Button</Button>
			<StepBackwardOutlined />
		</Space>
	);
}

export default App;
