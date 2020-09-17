import React from 'react';
import './App.scss';
import { StaticKitProvider } from '@statickit/react';
import Home from './component/Home';


function App() {
	

	return (
		<StaticKitProvider site="fb20e75bfacd">
		<div><Home/></div>
		</StaticKitProvider>
	);
}

export default App;
