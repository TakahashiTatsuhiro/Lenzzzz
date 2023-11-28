import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ItemsList from './components/ItemsList';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route exact path='/' element={<LoginForm />} />
					<Route exact path='/login' element={<LoginForm />} />
					<Route
						path='/items'
						element={
							<ProtectedRoute>
								<ItemsList />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
