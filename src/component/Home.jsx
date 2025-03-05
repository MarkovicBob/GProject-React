import { useEffect, useState } from "react";
import Card from "./Card";

function Home() {
  //Button Neu erstellen Funktion mit useState?
  const BtnNewDiary = (newDiary) => {
    const [currState, setCurrState] = useState("ModalNewDiary");
    const setModalNewDiary = newDiary.setModalNewDiary;
  };

  return (
    <>
      <div className="flex mx-16 my-8 justify-between items-center">
        <h1 className="font-black text-2xl">My Personal Diary</h1>
        <button
          //   onClick={() => {modalNewDiary} kommt von Yannis
          type="button"
          className="bg-Btn w-[200px] h-[25px] rounded-lg text-white text-sm"
        >
          + Neu erstellen
        </button>
      </div>
      <Card />
    </>
  );
}

export default Home;
