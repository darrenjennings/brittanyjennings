import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Post20230812 from '../components/Post20230812';

export default () =>
	<div>
		<Header />
		<div className="body-container">
			<Post20230812 />
		</div>
	</div>;
