import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, []);

  return (
    <div className="flex flex-col flex-grow w-[70%]">
      <h1 className="font-thin text-2xl px-5 py-6">Welcome to your Inbox</h1>
      <ul className="flex flex-col">
        {emails.map((email) => (
          <li>
            <button
              className="flex flex-col flex-grow w-full justify-start text-left shadow-xl bg-white border-t rounded-md p-3 hover:cursor-pointer hover:bg-zinc-200"
              key={email.id}
            >
              <strong>{email.subject}</strong>
              <p className="text-zinc-500">{email.body}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
