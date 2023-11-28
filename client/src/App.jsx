import { useState } from 'react';
import './App.css';
// import { Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ItemsList from './components/ItemsList';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
	// const [mode, setMode] = useState('login');

	return (
		<AuthProvider>
			{/* <Router> */}
				<Routes>
					{/* <Route path='/' component={<LoginForm />} /> */}
					<Route path='/' element={LoginForm} />
					<Route path='/login' element={<LoginForm />} />
					<Route path='/items' element={<ProtectedRoute><ItemsList /></ProtectedRoute> } />
				</Routes>
			{/* </Router> */}
		</AuthProvider>
	);
}

export default App;
