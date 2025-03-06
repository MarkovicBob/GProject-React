import { useState } from "react";

function Lesen({ entry, toggleShow }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <button
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Lesen
      </button> */}

      {/* MODAL */}
      {/* {isOpen && ( */}
      <>
        {/* MODAL CONTENT */}
        <div className="flex flex-col fixed inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gray-800/90 p-5 gap-5 items-center justify-center text-white">
          <div className="flex flex-col">
            <img className=" rounded-xl " src={entry.imageURL} alt="Bild" />
            <div className="flex flex-col p-5 text-center">
              <h3>{entry.title}</h3>
              <p>{entry.date}</p>
            </div>
          </div>
          <p>{entry.content}</p>

          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600
        cursor-pointer"
          >
            Bearbeiten
          </button>

          {/* BUTTON FOR CLOSED */}
          <button
            className="text-black rounded-full w-10 h-10 bg-gray-300 hover:bg-gray-400 cursor-pointer absolute top-2 right-2 flex justify-center items-center"
            onClick={() => toggleShow(entry)}
          >
            X
          </button>
        </div>
      </>
      {/* )} */}
    </>
  );
}

export default Lesen;
