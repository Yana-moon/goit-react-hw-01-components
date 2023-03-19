import { Profile } from './Profile';
import user from '/Users/yanak/Desktop/GOIT/GoIT/GitHub/goit-react-hw-01-components/src/data/user.json';
import { Statistics } from './Statistics';
import data from '/Users/yanak/Desktop/GOIT/GoIT/GitHub/goit-react-hw-01-components/src/data/data.json';
import { FriendList } from './FriendList';
import friends from '/Users/yanak/Desktop/GOIT/GoIT/GitHub/goit-react-hw-01-components/src/data/friends.json';
import { Transactions } from './Transactions';
import transactions from '/Users/yanak/Desktop/GOIT/GoIT/GitHub/goit-react-hw-01-components/src/data/transactions.json';

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


