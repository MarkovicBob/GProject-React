import { useState } from "react";

function Lesen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Lesen
      </button>

      {/* MODAL */}
      {isOpen && (
        <>
          {/* MODAL CONTENT */}
          <div className="flex flex-col fixed inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gray-800/50 p-5 gap-5 items-center justify-center">
            <div className="flex flex-row">
              <img
                className="absolute top-0 left-0 w-1/4 h-1/4 object-cover"
                src="{diaryCard.image}"
                alt="Bild"
              />
              <div className="flex flex-col p-5">
                <h3>Titel</h3>
                <p>Ort, Datum</p>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, praesentium nam delectus fugiat aspernatur ipsum
              natus itaque odio nulla harum voluptatibus ipsam atque voluptatum
              laborum quod deserunt rerum omnis sit.
            </p>

            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600
        cursor-pointer"
            >
              Bearbeiten
            </button>

            {/* BUTTON FOR CLOSED */}
            <button
              className="text-black rounded-full w-10 h-10 bg-gray-300 hover:bg-gray-400 cursor-pointer absolute top-2 right-2 flex justify-center items-center"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Lesen;
