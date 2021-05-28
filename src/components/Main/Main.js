import {
	Card,
	CardHeader,
	Typography,
	CardContent,
	Grid,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import List from './List/List';
import Form from './Form/Form';

const Main = () => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardHeader title='Expense Tracker' subheader='Powered By Speechly' />
			<CardContent>
				<Typography variant='h5' align='center'>
					{' '}
					Total Balance = Rs. 5000
				</Typography>
				<Typography
					variant='subtitle1'
					style={{ lineHeight: '1.53em', marginTop: '20px' }}
				>
					{/* Info Card component */}
					Try Saying:add expense of Rs. 10000 for salary
				</Typography>
			</CardContent>
			<Form />
			<CardContent className={classes.cardContent}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4}></Grid>
				</Grid>
			</CardContent>
			<List />
		</Card>
	);
};

export default Main;
