//
// EmailList.jsx
// Robert Macklem
// Jul 8 2025
//
// Simply fetches all emails with a  GET request (provided) and
// displays them based on tailwind formatting of a ul inside a div.
//

export default function EmailList({ setSelectedEmail, emails }) {
  return (
    <div className="flex flex-col flex-grow border-r md:min-w-[480px] lg:max-w-[480px]">
      {/* Inbox header */}
      <h1 className="font-thin text-2xl px-5 py-6 border-b">Inbox</h1>

      {/* Your actual inbox list -- checks emails.length to see if we retrieved any emails
      and - if not - displays placeholder <p> text*/}
      {emails.length ? (
        <ul className="flex flex-col">
          {emails.map((email) => (
            <li>
              <button
                onClick={
                  () =>
                    setSelectedEmail(
                      email
                    ) /* Handle email selection with passed in function */
                }
                className="flex flex-col flex-grow w-full justify-start text-left shadow-xl bg-white border-t rounded-md p-3 hover:cursor-pointer hover:bg-zinc-200"
                key={email.id}
              >
                <strong>{email.subject}</strong>
                <p className="text-zinc-500">{email.body}</p>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-light bg-white border-t rounded-md p-5">
          It looks empty. . .
        </p>
      )}
    </div>
  );
}
