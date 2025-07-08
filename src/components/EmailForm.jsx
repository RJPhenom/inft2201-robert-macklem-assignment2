export default function EmailForm() {
  return (
    <div className="flex flex-col flex-grow w-[20%] border rounded-lg shadow-md m-4">
      <h1 className="font-thin text-2xl px-5 py-6">Send Mail</h1>
      <form className="flex flex-col flex-grow gap-3 p-5">
        <label>Subject:</label>
        <input className="border rounded-md"></input>
        <label>Body:</label>
        <textarea className="border min-h-[20vh] rounded-md"></textarea>
        <div className="flex flex-row justify-end">
          <button className="flex flex-row gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-800 rounded-full">
            {/* Credit: Font Awesome @ https://fontawesome.com/*/}
            <img src="/send.svg" width={16} height={16} />
            <p className="text-white">Send</p>
          </button>
        </div>
      </form>
    </div>
  );
}
