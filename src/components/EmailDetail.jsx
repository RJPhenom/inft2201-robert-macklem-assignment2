import { useEffect, useState } from "react";

export default function EmailDetail({ id, subject, body }) {
  const [email, setEmail] = useState({ id, subject, body });
  return (
    <div className="flex flex-col flex-grow w-[50%] border rounded-lg shadow-md m-4">
      <h1 className="font-thin text-2xl px-5 py-6">Read</h1>
      <div className="flex flex-col flex-grow gap-3 p-5">
        <strong>Subject line</strong>
        <p>Body text</p>
      </div>
      <div className="flex flex-row justify-end gap-2 m-5">
        <button className="flex flex-row gap-2 px-5 py-2 bg-orange-400 hover:bg-orange-600 rounded-full">
          {/* Credit: Font Awesome @ https://fontawesome.com/*/}
          <img src="/edit.svg" width={16} height={16} />
          <p className="text-white">Edit</p>
        </button>
        <button className="flex flex-row gap-2 px-5 py-2 bg-red-600 hover:bg-red-800 rounded-full">
          {/* Credit: Font Awesome @ https://fontawesome.com/*/}
          <img src="/delete.svg" width={16} height={16} />
          <p className="text-white">Delete</p>
        </button>
      </div>
    </div>
  );
}
