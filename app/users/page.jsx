"use client";
import { useEffect, useState } from "react";
import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";

function page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  console.log(users);
  return (
    <div className="flex flex-col items-center gap-3">
      {users.map((user) => (
        <Link className="font-bold text-xl hover:opacity-70" key={user.id} href={`/users/${user.id}`}>
          {user.name}
        </Link>
      ))}
      <br />
      <br />
      <a className="btn" href="/">
        Go back to home page
      </a>
    </div>
  );
}

export default page;
