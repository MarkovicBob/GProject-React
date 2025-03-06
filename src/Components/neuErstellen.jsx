import { useState } from "react";

function NeuErstellen({ toggleShowNew, saveEntry, entryOfToday, entryArray }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const titel = e.target.titel.value.trim();
    const bildURL = e.target.bildurl.value.trim();
    const datum = e.target.datum.value.trim();
    const inhalt = e.target.inhalt.value.trim();

    if (!titel || !bildURL || !datum || !inhalt) {
      alert("Bitte füllen Sie alle Felder aus!");
      return;
    }
    let lastID = 0;
    if (entryArray[0]) {
      lastID = entryArray[0].id;
    }
    const returnObject = {
      id: lastID + 1,
      title: titel,
      date: datum,
      content: inhalt,
      imageURL: bildURL,
    };
    console.log(returnObject);
    saveEntry(returnObject);
    e.target.reset();
  }
  return (
    <div>
      {/* <button
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Neu erstellen
      </button> */}

      {/* MODAL  */}
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
        <div className="bg-[#FDF1EA] p-6 rounded-xl shadow-xl w-[80%] h-[40%] relative">
          {/* BUTTON FOR CLOSED */}
          <button
            className="text-black rounded-full w-5 h-5 bg-gray-300 hover:bg-gray-400 cursor-pointer absolute top-2 right-2 flex justify-center items-center"
            onClick={toggleShowNew}
          >
            X
          </button>
          {entryOfToday ? (
            <p>
              Sie haben heute bereits einen Eintrag erstellt. Kommen Sie morgen
              wieder!
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full bg-amber-100 p-5 rounded-md mb-2"
                  type="text"
                  name="titel"
                  placeholder="Titel..."
                />
                <div className="flex flex-row justify-around gap-5">
                  <input
                    className="w-2/3 bg-amber-100 p-5 rounded-md my-2"
                    type="text"
                    name="bildurl"
                    placeholder="bild URL"
                  />
                  <input
                    className="w-1/3 bg-amber-100 p-5 rounded-md my-2 text-center"
                    type="date"
                    name="datum"
                    placeholder="Datum"
                  />
                </div>
                <textarea
                  className="w-full bg-amber-100 p-5 rounded-md my-2"
                  name="inhalt"
                  placeholder="Inhalt..."
                  rows="4"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                >
                  Speichern
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NeuErstellen;
