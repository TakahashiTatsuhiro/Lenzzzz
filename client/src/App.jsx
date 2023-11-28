import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [mode, setMode] = useState('login');

	return (
		<>
			{mode === 'login' && (
				<div className='login__container'>
					<div className='login__box'>
						<h1>Lenzzzz へようこそ</h1>
						<p>ユーザー名</p>
						<input type='text' placeholder='ユーザー名を入力' />
						<p>パスワード</p>
						<input type='password' placeholder='パスワードを入力' />
						<button onClick={() => setMode('items')}>ログイン</button>
					</div>
				</div>
			)}
			{mode === 'items' && (
				<div className='items__container'>
					<div className='items__header'>
						<button>ホーム</button>
						<button>検索</button>
					</div>
					<div className='items__add'>
						<button>新しいアイテムを追加</button>
					</div>
					<div className='items__list'>
						<div className='item'>
							<img src='' alt='' />
							<p>防災食</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
