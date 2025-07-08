//
// App.jsx
// Robert Macklem
// Jul 8 2025
//
// Main app .jsx file for my email webapp assignment. Includes a Header, a
// List + Reading Pane, and a Buttons div for handling Edit/Delete/Compose emails
// made responsive on mobile with tailwind.
//

import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

// My components
import Header from "./components/Header.jsx";
import EmailList from "./components/EmailList.jsx";
import EmailForm from "./components/EmailForm.jsx";
import EmailDetail from "./components/EmailDetail.jsx";

export default function App() {
  // Track emails state and API updates
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [updateEmails, setUpdateEmails] = useState(true);

  // useEffect to repopulate page when data changes
  useEffect(() => {
    if (updateEmails) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setEmails(data);
          setUpdateEmails(false);
          if (selectedEmail) {
            setSelectedEmail(
              data.find((e) => e.id === selectedEmail.id) || null
            );
          }
        });
    }
  }, [updateEmails]);

  // React state for tracking compose modal & mode
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Deletion handler (other handlers found in modal component -> EmailForm.jsx)
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

  // WebApp HTML
  return (
    <div className="relative flex flex-col h-full">
      <Header />
      <div className="flex flex-col flex-grow md:flex-row">
        <EmailList setSelectedEmail={setSelectedEmail} emails={emails} />
        {selectedEmail !== null && (
          <EmailDetail selectedEmail={selectedEmail} />
        )}
      </div>

      {/* Buttons footer */}
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

      {
        /* Compose modal (more responsive than right-side panel imo) */
        showForm && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black bg-opacity-40 md:bg-opacity-0">
            <div className="fixed bottom-32 md:right-8 shadow-xl rounded-lg w-[90%] max-w-[640px] ">
              <EmailForm
                selectedEmail={selectedEmail}
                editMode={editMode}
                setEditMode={setEditMode}
                setShowForm={setShowForm}
                setUpdateEmails={setUpdateEmails}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}
