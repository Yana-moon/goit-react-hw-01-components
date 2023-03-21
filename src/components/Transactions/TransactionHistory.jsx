import { TransactionsWrapper, TransnactionsHeader } from './Transaction.styled';
import PropTypes from 'prop-types';

import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({items}) => {
    return (
        <TransactionsWrapper className='transaction-history'>
<thead>
    <TransnactionsHeader>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </TransnactionsHeader>
</thead>
<tbody>
{items.map((item) => 
                <TransactionHistoryItem key={item.id} item={item} />
            )}
</tbody>
        </TransactionsWrapper>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ).isRequired,
};
