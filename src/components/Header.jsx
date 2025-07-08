export default function Header() {
  return (
    <header className="w-full flex flex-row items-center gap-3 bg-blue-600 text-white text-xl p-5">
      {/* Credit: Icon Archive @ https://www.iconarchive.com */}
      <img
        src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/128/Communication-email-2-icon.png"
        width="32"
        height="32"
        className="bg-white p-1 rounded-full"
      />
      <div>
        <strong>Mailer</strong>App
      </div>
    </header>
  );
}
