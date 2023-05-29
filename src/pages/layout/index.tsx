import { Layout } from 'antd';
import Header from './header';
import Sider from './aside';
import Content from './main';
const height: React.CSSProperties = {
	height: '100vh',
};
export default function Main() {
	return (
		<div>
			<Layout style={height}>
				<Header />
				<Layout hasSider>
					<Sider />
					<Content />
				</Layout>
			</Layout>
			{/* <Layout>
        <Sider/>
        <Layout>
          <Header/>
          <Content/>
        </Layout>
      </Layout> */}
		</div>
	);
}
