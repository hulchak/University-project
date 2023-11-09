import {useState} from "react";
import {useAddUserMutation, useFetchUsersQuery} from "../../store/users/usersApiSlice.js";

export default function Users() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const {data} = useFetchUsersQuery();
  const [addUser] = useAddUserMutation();

  function submit(e) {
    e.preventDefault();

    addUser({
      firstName,
      lastName
    })
  }

  const users = data?.map(user =>
    <div className="mx-3">
      {user.firstName} {user.lastName}
    </div>
  )

  return (
    <>
      <form className="w-full" onSubmit={(e) => submit(e)}>
        <h2 className="font-bold text-xl mb-5">Користувач</h2>
        <input className="w-full block px-5 py-2.5 mb-7 appearance-none border rounded-3xl"
               onChange={(event) => setLastName(event.target.value)}
               value={lastName}
               type="text"
               placeholder="Прізвище"
               required
        />
        <input className="w-full block px-5 py-2.5 mb-7 appearance-none border rounded-3xl"
               onChange={(event) => setFirstName(event.target.value)}
               value={firstName}
               type="text"
               placeholder="Імʼя"
               required
        />
        <button
          type="submit"
          className="w-full text-center font-semibold uppercase rounded-xl py-3"
        >
          Створити
        </button>
      </form>
      {users}
    </>
  );
}