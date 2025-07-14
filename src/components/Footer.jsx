//
// Footer.jsx
// Robert Macklem
// Jul 14 2025
//
// Moved my buttons footer from App.jsx to dedicated Footer.jsx on
// feedback from Prof. Luxmore
//

const API_URL = import.meta.env.VITE_API_URL;

// Deletion handler (other handlers found in modal component -> EmailForm.jsx)
export default function Footer({
  selectedEmail,
  setSelectedEmail,
  setEditMode,
  setUpdateEmails,
  showForm,
  setShowForm,
}) {
  const onDelete = async () => {
    try {
      const re = await fetch(`${API_URL}/${selectedEmail.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!re.ok) throw new Error(`HTTP Error on DELETE. Status: ${re.status}`);
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }

    setSelectedEmail(null);
    setUpdateEmails(true);
  };

  return (
    <div className="flex justify-center md:justify-end text-white border-t h-[92px]">
      <div className="flex flex-row  gap-2 mx-5">
        {selectedEmail && (
          <div className="flex flex-row gap-2">
            <button
              className="flex flex-row items-center gap-2 px-5 py-2 my-5 right-36 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 rounded-full shadow-lg"
              onClick={() => {
                setEditMode(true);
                setShowForm(true);
              }}
              disabled={showForm}
            >
              {/* Edit button -> opens the EmailForm modal with a populated { email } prop for edit mode
                Icon Credit: Font Awesome @ https://fontawesome.com/*/}
              <img src="/edit.svg" width={16} height={16} />
              Edit
            </button>
            <button
              className="flex flex-row items-center gap-2 px-5 py-2 my-5 right-64 bg-red-600 hover:bg-red-700 disabled:bg-red-300 rounded-full shadow-lg"
              onClick={() => onDelete()}
              disabled={showForm}
            >
              {/* Delete button, simply sends a DELETE request to the API
                Credit: Font Awesome @ https://fontawesome.com/*/}
              <img src="/delete.svg" width={16} height={16} />
              Delete
            </button>
          </div>
        )}
        <button
          className="flex flex-row items-center gap-2 px-5 py-2 my-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-full shadow-lg"
          onClick={() => setShowForm(true)}
          disabled={showForm}
        >
          <img src="/new.svg" width={16} height={16} />
          New Mail
        </button>
      </div>
    </div>
  );
}
