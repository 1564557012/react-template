import { Suspense, lazy } from 'react';
import { Divider, Spin } from 'antd';
export interface RouterBody {
	name?: string;
	path: string;
	component?: any;
	element?: any;
	children?: RouterBody[];
}
const router = [
	{
		path: '/',
		component: lazy(() => import('@/pages/login')),
	},
	{
		path: '/main',
		component: lazy(() => import('@/pages/layout')),
	},
	{
		path: '/home',
		component: lazy(() => import('@/pages/home')),
		meta: {
			title: '首页',
		},
	},
	{
		path: '/login',
		component: lazy(() => import('@/pages/login')),
	},
	{
		path: '/about',
		component: lazy(() => import('@/pages/about')),
	},
];

const changeRouter = (routers: RouterBody[]): any => {
	return routers.map((item) => {
		if (item.children) {
			item.children = changeRouter(item.children);
		}
		item.element = (
			<Suspense
				fallback={
					<div>
						<Spin size="large" />
					</div>
				}
			>
				<item.component />
			</Suspense>
		);
		return item;
	});
};
const routers = changeRouter(router);
export default routers;
