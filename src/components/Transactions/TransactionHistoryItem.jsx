import PropTypes from 'prop-types';
import {
TransactionsTable,
TransactionsType,
} from './Transaction.styled';

export const TransactionHistoryItem = ({item}) => {
    return (
    <TransactionsTable key={item.id}>
        <TransactionsType>{item.type}</TransactionsType>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </TransactionsTable>
    )}



TransactionHistoryItem.propTypes = {
item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}).isRequired,
};