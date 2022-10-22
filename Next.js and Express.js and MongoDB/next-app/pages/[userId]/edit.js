import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { readUser, updateUser } from "../../helpers/user";
import Link from "next/link";

export default function Edit() {
  const [user, setUser] = useState({
    _id: "",
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
    updateUser(user?._id, user)
      .then(() => router.back())
      .catch((error) => console.error(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const userId = router.query?.userId;
    if (userId) {
      readUser(userId)
        .then((data) => setUser(data))
        .catch((error) => console.error(error));
    }
  }, [router.query?.userId]);

  return (
    <>
      <Head>
        <title>Edit</title>
      </Head>

      <div>
        <h1>Edit User</h1>

        <form onSubmit={onSubmit} className="mb-3">
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
          <button type="submit">{loading ? "Saving..." : "Save"}</button>
        </form>

        <div>
          <Link href="/">
            <a>Back to list</a>
          </Link>
          <span className="mx-1">|</span>
          <Link href={`/${user?._id}`}>
            <a>Back to details</a>
          </Link>
        </div>
      </div>
    </>
  );
}
