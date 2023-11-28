import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
	const [user_name, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
    const { login, setUserId, setUserName } = useAuth();

	const handleSubmit = async () => {
		try {
			const response = await fetch('/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username: user_name, password }),
			});
			if (response.ok) {
				const data = await response.json();
                setUserId(data[0].id);
                setUserName(user_name);
                login();
				navigate('/items'); // ここでItemsListコンポーネントへ遷移
			}
		} catch (error) {
			console.log(error);
		}
	};

    const handleSubmitTest = async () => {
		try {
            setUserId(1);
            setUserName(user_name);
            login(); // ログイン状態を更新
			navigate('/items'); // ここでItemsListコンポーネントへ遷移
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='login__container'>
			<div className='login__box'>
				<h1>Lenzzzz へようこそ</h1>
				<p>ユーザー名</p>
				<input
					type='text'
					placeholder='ユーザー名を入力'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<p>パスワード</p>
				<input
					type='password'
					placeholder='パスワードを入力'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleSubmit}>ログイン</button>
			</div>
		</div>
	);
};

export default LoginForm;
