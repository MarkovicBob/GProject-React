import { useEffect, useState } from "react";
// import Card from "./Card";
import NeuErstellen from "./neuErstellen";
import Lesen from "./Lesen";
import DiaryCard from "./diaryCard";

function Home() {
  //Button Neu erstellen Funktion mit useState?
  // const BtnNewDiary = (newDiary) => {
  //   const [currState, setCurrState] = useState("ModalNewDiary");
  //   const setModalNewDiary = newDiary.setModalNewDiary;
  // };

  const [diary, setDiary] = useState([]);
  const date = new Date();
  const monthstring =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  const daystring =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const datestring = `${date.getFullYear()}-${monthstring}-${daystring}`;

  useEffect(() => {
    const savedDiary = JSON.parse(localStorage.getItem("diary"));

    if (savedDiary && savedDiary.length > 0) {
      setDiary(savedDiary);
      savedDiary.some((e) => e.date == datestring)
        ? setEntryOfToday(true)
        : setEntryOfToday(false);
    } else {
      localStorage.removeItem("diary");
      setDiary([]);
    }
  }, []);

  const [showNewModal, setShowNewModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [entryToShow, setEntryToShow] = useState({});
  const [entryOfToday, setEntryOfToday] = useState(false);

  const toggleNewModal = () => {
    setShowNewModal(!showNewModal);
    console.log("toggleNew: " + showNewModal);
  };

  const toggleDetailModal = (entry) => {
    setShowDetailModal(!showDetailModal);
    setEntryToShow(entry);
    console.log(entryToShow);
    console.log("DetailModal: " + showDetailModal);
  };

  const saveEntry = (newEntry) => {
    const newArray = [newEntry, ...diary];
    setDiary((prevDiary) => [newEntry, ...prevDiary]);
    localStorage.setItem("diary", JSON.stringify(newArray));
    setShowNewModal(false);
    newEntry.date == datestring && setEntryOfToday(true);
  };

  return (
    <>
      <div className="flex mx-16 my-8 justify-between items-center">
        <h1 className="font-black text-2xl">My Personal Diary</h1>
        <button
          onClick={toggleNewModal}
          type="button"
          className="bg-Btn w-[200px] h-[25px] rounded-lg text-white text-sm"
        >
          + Neu erstellen
        </button>
      </div>
      {/* <Card /> */}
      <div className="mx-16 rounded-xl bg-Card grid grid-cols-4 gap-4 p-6 justify-between items-center">
        {/* <img
          src="https://plus.unsplash.com/premium_photo-1681412205238-8171ccaca82b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className="w-[380px] h-[245px] bg-cover rounded-t-xl"
        />
        <h2 className="text-xl font-bold ml-6 mt-6">Titel</h2>
        <p className="text-base ml-6 mt-1">Ort, Datum</p>
        <button
          className="bg-Btn rounded-lg ml-6 mt-10 text-white w-[130px] h-[45px]"
          type="button"
        >
          lesen
        </button> */}
        {diary.map((diaryEntry) => (
          <DiaryCard
            key={diaryEntry.id}
            diaryCard={diaryEntry}
            showModal={toggleDetailModal}
          />
        ))}
      </div>

      {showNewModal && (
        <NeuErstellen
          toggleShowNew={toggleNewModal}
          saveEntry={saveEntry}
          entryOfToday={entryOfToday}
          entryArray={diary}
        />
      )}
      {showDetailModal && (
        <Lesen entry={entryToShow} toggleShow={toggleDetailModal} />
      )}
    </>
  );
}

export default Home;
