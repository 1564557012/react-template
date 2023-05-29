import { Link } from 'react-router-dom';
import { Button, Card, Space } from 'antd';

export default function Login() {
	return (
		<div>
			<Space>
				<Card
					title="Default size card"
					extra={<a href="#">More</a>}
					style={{ width: 300 }}
				>
					<Link to="/main">
						<Button type="primary">登录</Button>
					</Link>
				</Card>
			</Space>
		</div>
	);
}
