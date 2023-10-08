import React, { useReducer, useState } from "react";
import "../styles/App.css";
import AddUser from "./AddUser";
import Users from "./Users";
import Wallet from "./Wallet";
import reducer from "../reducers";
const App = () => {
    console.log("here");
    const [balance, setBalance] = useState(0);
    const [users, dispatch] = useReducer(reducer, []);
    return (
        <div id="main">
            <AddUser
                dispatch={dispatch}
                setBalance={setBalance}
                balance={balance}
            />
            <Wallet balance={balance} />
            <Users
                users={users}
                dispatch={dispatch}
                setBalance={setBalance}
                balance={balance}
            />
        </div>
    );
};

export default App;
