import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./Features/Users";
import { useState } from "react";
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div>
      <div className="addusr">
        <input
          type="text"
          placeholder="Name...."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username...."
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: 0,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUSers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
