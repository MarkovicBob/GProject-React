function diaryCard({ diaryCard }) {
  return (
    <div>
      <img
        className="w-[380px] h-[245px] bg-cover rounded-t-xl"
        src={diaryCard.image}
        alt={diaryCard.title}
      />
      <h2 className="text-xl font-bold ml-6 mt-6">{diaryCard.title}</h2>
      <p className="text-base ml-6 mt-1">{diaryCard.date}</p>
      <button
        //   onClick={() => {modalReadDiary} kommt von Boban
        type="button"
        className="bg-Btn w-[200px] h-[25px] rounded-lg text-white text-sm"
      >
        lesen
      </button>
    </div>
  );
}

export default diaryCard;
