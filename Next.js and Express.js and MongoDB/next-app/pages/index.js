import Head from "next/head";
import { useEffect, useState } from "react";
import { readAllUser } from "../helpers/user";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    readAllUser()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <div>
        <h1>User</h1>

        <div className="mb-3">
          <Link href="/create">
            <a>Create user</a>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user?.name}</td>
                <td>{user?.age}</td>
                <td>{user?.gender}</td>
                <td>
                  <Link href={`/${user._id}`}>
                    <a>Details</a>
                  </Link>
                  <span className="mx-1">|</span>
                  <Link href={`/${user._id}/edit`}>
                    <a>Edit</a>
                  </Link>
                  <span className="mx-1">|</span>
                  <Link href={`/${user._id}/delete`}>
                    <a>Delete</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
