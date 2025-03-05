import { useState } from "react";

function NeuErstellen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Neu erstellen
      </button>

      {/* MODAL  */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
          <div className="bg-[#FDF1EA] p-6 rounded-xl shadow-xl w-96 relative">
            {/* BUTTON FOR CLOSED */}
            <button
              className="text-black rounded-full w-5 h-5 bg-gray-300 hover:bg-gray-400 cursor-pointer absolute top-2 right-2 flex justify-center items-center"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            {/* MODAL CONTENT */}
            <div className="flex flex-col gap-4">
              <input
                className="w-full h-4 bg-amber-100 p-5 rounded-md"
                type="titel"
                name="titel"
                placeholder="Titel..."
              />
              <div className="flex flex-row justify-around gap-5">
                <p>Bild URL</p>
                <input
                  className="w-1/2 h-4 bg-amber-100 p-5 rounded-md"
                  type="bild-url"
                  name="bild-url"
                  placeholder=""
                />
                <input
                  className="w-1/2 h-4 bg-amber-100 p-5 rounded-md"
                  type="bild-url"
                  name="bild-url"
                  placeholder=""
                />
              </div>
              <textarea
                className="w-full h-4 bg-amber-100 p-2 rounded-md"
                type="text"
                name="text"
                placeholder="Text..."
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NeuErstellen;
