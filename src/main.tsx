import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import 'antd/dist/reset.css'
import { BrowserRouter } from 'react-router-dom';
// import Router from "./router"

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
