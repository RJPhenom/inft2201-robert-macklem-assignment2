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
import Footer from "./components/Footer.jsx";

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
              data.find((e) => e.id === selectedEmail.id) || null // Chcekcs if there is a selected email and re-grabs it if so
            );
          }
        });
    }
  }, [updateEmails]);

  // React state for tracking compose modal & mode
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);

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

      {/* Buttons footer moved to Footer.jsx */}
      <Footer
        selectedEmail={selectedEmail}
        setSelectedEmail={setSelectedEmail}
        setEditMode={setEditMode}
        setUpdateEmails={setUpdateEmails}
        showForm={showForm}
        setShowForm={setShowForm}
      />

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
