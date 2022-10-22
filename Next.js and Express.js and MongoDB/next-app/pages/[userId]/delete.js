import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { deleteUser } from "../../helpers/user";

export default function Delete() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const userId = useMemo(() => router.query?.userId, [router.query?.userId]);

  const onClickCancel = () => {
    if (loading) {
      return;
    }

    router.back();
  };

  const onClickDelete = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    deleteUser(userId)
      .then(() => router.back())
      .catch((error) => console.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Head>
        <title>Delete</title>
      </Head>

      <h1>Delete user</h1>

      <p>
        Do you want to delete <b>{userId}</b> ?
      </p>
      <div>
        <button type="button" onClick={onClickCancel}>
          Cancel
        </button>
        <span className="mx-1">|</span>
        <button type="button" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
