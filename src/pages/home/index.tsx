import { Button, Card, Space } from 'antd';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<Space>
				<Link to="/login">
					<Button type="primary">去登录</Button>
				</Link>
				<Card
					title="Default size card"
					extra={<a href="#">More</a>}
					style={{ width: 300 }}
				>
					首页
				</Card>
			</Space>
		</div>
	);
}
