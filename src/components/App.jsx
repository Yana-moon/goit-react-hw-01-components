import { Profile } from './Profile';
import user from '../user.json';
import { Statistics } from './Statistics';
import data from '../data.json';
import { FriendList } from './FriendList';
import friends from '../friends.json';
import { Transactions } from './Transactions';
import transactions from '../transactions.json';

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
