import { Profile } from './Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList';
import friends from '../data/friends.json';
import { Transactions } from './Transactions';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile profile={user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions}/>
    </div>
  );
};
