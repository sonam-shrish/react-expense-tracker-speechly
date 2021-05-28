import {
	ListItem,
	Avatar,
	List as MUIList,
	ListItemSecondaryAction,
	ListItemAvatar,
	ListItemText,
	ListItemIcon,
	Slide,
	IconButton,
} from '@material-ui/core';
import { MoneyOff, Delete } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
import { useContext } from 'react';
const List = () => {
	const classes = useStyles();
	const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

	return (
		<MUIList className={classes.list} dense={false}>
			{transactions.map((transaction) => (
				<Slide in mountOnEnter unMountOnExit key={transaction.id}>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								className={
									transaction.type === 'Income'
										? classes.avatarIncome
										: classes.avatarExpense
								}
							>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={transaction.category}
							secondary={`Rs. ${transaction.amount} - ${transaction.date}`}
						/>{' '}
						<ListItemSecondaryAction>
							<ListItemIcon
								edge='end'
								aria-label='delete'
								onClick={deleteTransaction}
							>
								<IconButton>
									<Delete />
								</IconButton>
							</ListItemIcon>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</MUIList>
	);
};

export default List;
