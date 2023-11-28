import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login, setUserId, setUserName } = useAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async() => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password})
            });
            if(response.ok) {
                const data = await response.json();
                setUserId(data.user.id);
                setUserName(data.user.username);
                login();
                navigate('/items');
            }
        }
        catch {

        }
    }

    return (
        <div className='login__container'>
					<div className='login__box'>
						<h1>Lenzzzz へようこそ</h1>
						<p>ユーザー名</p>
						<input type='text' placeholder='ユーザー名を入力' onChange={(e) => setUsername(e.target.value) } />
						<p>パスワード</p>
						<input type='password' placeholder='パスワードを入力' onChange={(e) => setPassword(e.target.value) }/>
						<button >ログイン</button>
					</div>
				</div>
    )
}

export default LoginForm;