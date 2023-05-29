import router from '@/router';
import { useRoutes } from 'react-router-dom';
import 'antd/dist/reset.css';
function App() {
	const RouterView = useRoutes(router);
	return <div>{RouterView}</div>;
}
export default App;
