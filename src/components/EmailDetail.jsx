//
// EmailDetail.jsx
// Robert Macklem
// Jul 8 2025
//
// Takes in an { email } prop which is simply the email whose details
// we want to display. Formatted component as a reading pane (since email
// editing is handled in the EmailForm modal, called here by 'Edit' button)
//

export default function EmailDetail({ selectedEmail }) {
  // Don't display a reading pane if there is no email to read
  if (!selectedEmail) {
    return;
  }

  return (
    <div className="flex flex-col flex-grow h-full">
      {/* The reading pain header */}
      <h1 className="font-regular text-2xl p-6 border shadow-md rounded-md m-5">
        {selectedEmail.subject}
      </h1>

      {/* The actual em,ail to read section, populated by { email } prop */}
      <div className="flex flex-col flex-grow gap-3 p-6 border shadow-md rounded-md mx-5 mb-5 ">
        <p>{selectedEmail.body}</p>
      </div>
    </div>
  );
}
