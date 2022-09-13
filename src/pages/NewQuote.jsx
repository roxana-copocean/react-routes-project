import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

function NewQuote() {
	const { sendRequest, status } = useHttp(addQuote);
	let history = useHistory();

	useEffect(
		() => {
			if (status === 'completed') {
				history.push('/quotes');
			}
		},
		[ status, history ]
	);

	const addQuotehandler = (quoteData) => {
		sendRequest(quoteData);
	};
	return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuotehandler} />;
}

export default NewQuote;
