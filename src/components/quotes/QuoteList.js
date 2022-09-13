import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// sorting our array of quotes by id in an asending or decending way
const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

// QuoteList component
const QuoteList = (props) => {
	const match = useRouteMatch();
	const history = useHistory();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const isSortingAscending = queryParams.get('sort') === 'asc';

	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	const changeSortingHandler = () => {
		// an other way to make our history.push more readable
		// history.push({
		// 	pathname: match.path,
		// 	search: `?sort=${isSortingAscending ? 'des' : 'asc'}`
		// });
		history.push(`${match.path}?sort=${isSortingAscending ? 'des' : 'asc'}`);
	};
	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Decending' : 'Ascending'}</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
