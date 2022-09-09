import styles from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

import React from 'react';

function MainNavigation() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Daily Quotes</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink activeClassName={styles.active} to="/quotes">
							All Qoutes
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={styles.active} to="/new-quote">
							Add a Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
