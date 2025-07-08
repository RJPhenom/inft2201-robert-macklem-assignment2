import { useEffect, useState } from "react";

// My components
import Header from "./components/Header.jsx";
import EmailList from "./components/EmailList.jsx";
import EmailForm from "./components/EmailForm.jsx";
import EmailDetail from "./components/EmailDetail.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <EmailList />
        <EmailDetail />
        <EmailForm />
      </div>
    </div>
  );
}
