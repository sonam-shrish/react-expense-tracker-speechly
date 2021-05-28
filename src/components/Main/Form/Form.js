import {
	FormControl,
	Grid,
	InputLabel,
	TextField,
	Typography,
	Select,
	Button,
	MenuItem,
} from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';
import {
	incomeCategories,
	expenseCategories,
} from '../../../constants/categories';
import formatDate from '../../utils/formatDate';
const Form = () => {
	const initialState = {
		id: 0,
		type: '',
		category: '',
		amount: '',
		date: formatDate(new Date()),
	};
	const classes = useStyles();

	const [formData, setFormData] = useState(initialState);
	const { addTransaction } = useContext(ExpenseTrackerContext);

	const createTransaction = () => {
		const transaction = { ...formData, id: uuidv4() };
		addTransaction(transaction);

		setFormData(initialState);
	};

	const selectedCategories =
		formData.type === 'Income' ? incomeCategories : expenseCategories;
	console.log(formData.date);
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography align='center' variant='subtitle2' gutterBottom>
					...
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={formData.type}
						onChange={(e) => setFormData({ ...formData, type: e.target.value })}
					>
						<MenuItem value='Income'>Income</MenuItem>
						<MenuItem value='Expense'>Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) =>
							setFormData({ ...formData, category: e.target.value })
						}
					>
						{selectedCategories.map((category) => (
							<MenuItem key={category.type} value={category.type}>
								{category.type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='number'
					value={formData.amount}
					onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
					label='Amount'
					fullWidth
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='date'
					label='Date'
					fullWidth
					value={formData.date}
					onChange={(e) =>
						setFormData({
							...formData,
							date: formatDate(e.target.value),
						})
					}
				/>
			</Grid>
			<Button
				className={classes.button}
				type='submit'
				variant='outlined'
				color='primary'
				onClick={createTransaction}
				fullWidth
			>
				CREATE
			</Button>
		</Grid>
	);
};

export default Form;
