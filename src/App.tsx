import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count] = useState(0);

	return <div>{count}</div>;
}

export default App;
