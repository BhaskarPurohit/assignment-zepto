import React, { useState, FC, ChangeEvent } from "react";
import data from "./data.json"; // replace with your json file path
import "./ChipInputComponent.css";

interface User {
  name: string;
  email: string;
  picture: string;
}

interface ChipProps {
  user: User;
  onRemove: (user: User) => void;
}

const Chip: FC<ChipProps> = ({ user, onRemove }) => (
  <div className="chip">
    <img src={user.picture} alt={user.name} className="chip-image" />
    <span className="chip-name">{user.name}</span>
    <button onClick={() => onRemove(user)} className="chip-close">
      X
    </button>
  </div>
);

const ChipInputComponent: FC = () => {
  const [users, setUsers] = useState<User[]>(data);
  const [chips, setChips] = useState<User[]>([]);
  const [inputValue, setInputValue] = useState("");

  const filteredUsers = users.filter(
    (user) => !chips.includes(user) && user.name.includes(inputValue)
  );

  const addChip = (user: User) => {
    setChips([...chips, user]);
    setInputValue("");
  };

  const removeChip = (chip: User) => {
    setChips(chips.filter((c) => c !== chip));
  };

  return (
    <div className="chip-input">
      {chips.map((chip) => (
        <Chip key={chip.email} user={chip} onRemove={removeChip} />
      ))}
      <input
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        onFocus={() => setInputValue("")}
      />
      <ul className="user-suggestions">
        {filteredUsers.map((user) => (
          <li
            key={user.email}
            onClick={() => addChip(user)}
            className="user-suggestion"
          >
            <img src={user.picture} alt={user.name} className="user-image" />
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipInputComponent;