import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { createUser } from "../helpers/user";

export default function Create() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    createUser(user)
      .then(() => router.back())
      .catch((error) => console.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <div>
        <h1>Create User</h1>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={user.age}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, age: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={user.gender}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button type="submit">{loading ? "Creating..." : "Create"}</button>
        </form>
      </div>
    </>
  );
}
