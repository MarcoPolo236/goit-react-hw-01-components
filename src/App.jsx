import React from "react";
import { Profile } from "./components/Profile/Profile";
import user from "../src/user.json";
import { Statistics } from "./components/Statistics/Statistics";
import data from "../src/data.json";
import { FriendList } from "./components/Friendlist/FriendList";
import friends from "../src/friends.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import transactions from "../src/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};