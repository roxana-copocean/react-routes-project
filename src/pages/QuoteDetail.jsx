import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

function QuoteDetail() {
	const params = useParams();
	return (
		<div>
			<h2>Detail about the quote</h2>
			<p>{params.quoteId}</p>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</div>
	);
}

export default QuoteDetail;
