import { useEffect, useState } from "react";
import diaryCard from "./diaryCard";

function Card() {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    const savedDiary = localStorage.getItem("diary");

    if (savedDiary && savedDiary.length > 0) {
      setDiary(JSON.parse(savedDiary));
    } else {
      localStorage.removeItem("diary");
      setDiary([]);
    }
  }, []);

  return (
    <>
      <div className="w-[380px] h-[435px] ml-16 rounded-xl bg-Card">
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
        {savedDiary.map((diaryYannis) => (
          <diaryCard key={diaryYannis.id} diary={diaryYannis} />
        ))}
      </div>
    </>
  );
}

export default Card;
