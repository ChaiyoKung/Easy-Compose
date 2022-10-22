import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { readUser } from "../helpers/user";
import Link from "next/link";

export default function Details() {
  const [user, setUser] = useState();
  const router = useRouter();

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
        <title>Detail</title>
      </Head>

      <div>
        <h1>User Details</h1>

        <div className="mb-3">
          <span className="mr-3">
            <b>Id:</b>
          </span>
          <span>{user?._id}</span>
        </div>
        <div className="mb-3">
          <span className="mr-3">
            <b>Name:</b>
          </span>
          <span>{user?.name}</span>
        </div>
        <div className="mb-3">
          <span className="mr-3">
            <b>Age:</b>
          </span>
          <span>{user?.age}</span>
        </div>
        <div className="mb-3">
          <span className="mr-3">
            <b>Gender:</b>
          </span>
          <span>{user?.gender}</span>
        </div>
        <div className="mb-3">
          <span className="mr-3">
            <b>Created At:</b>
          </span>
          <span>{user?.createdAt}</span>
        </div>
        <div className="mb-3">
          <span className="mr-3">
            <b>Updated At:</b>
          </span>
          <span>{user?.updatedAt}</span>
        </div>
        <div>
          <Link href="/">
            <a>Back to list</a>
          </Link>
          <span className="mx-1">|</span>
          <Link href={`/${user?._id}/edit`}>
            <a>Edit</a>
          </Link>
        </div>
      </div>
    </>
  );
}
