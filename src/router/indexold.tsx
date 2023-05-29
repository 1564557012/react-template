import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Home from '@/pages/home';
import About from '@/pages/about';
const baseRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
);
export default baseRouter;

// import { lazy } from "react";
// import { createBrowserRouter } from "react-router-dom";

// export const router = createBrowserRouter([
//   {
//       path: '/test',
//       element: lazy(() => import('@/pages/Test')),
//       // 若有子页面，此为参考
//       children: [
//           {
//               path: '/test/demo',
//               element:  lazy(() => import('@/pages/Test/Demo'))
//           },
//           {
//               path: '/test/demo2',
//               element: lazy(() => import('@/pages/Test/Demo2'))
//           }
//       ]
//   },
//   {
//       path: '/index',
//       component: lazy(() => import('@/pages/Home')),
//       // 如果要求严格路径
//       isExact: true,
//       meta: {
//           title: '首页'
//       }
//   },
//   {
//       path: '/login',
//       component: lazy(() => import('@/pages/Login')),
//       meta: {
//           title: '登录页面'
//       }
//   }

// ])
