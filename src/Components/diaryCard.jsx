function diaryCard({ diaryCard, showModal }) {
  return (
    <div className="shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        className="w-[380px] h-[245px] bg-cover rounded-xl"
        src={diaryCard.imageURL}
        alt={diaryCard.title}
      />
      <h2 className="text-xl font-bold ml-6 mt-6">{diaryCard.title}</h2>
      <p className="text-base ml-6 mt-1">{diaryCard.date}</p>
      <button
        onClick={() => showModal(diaryCard)}
        type="button"
        className="bg-Btn w-[200px] h-[25px] rounded-lg text-white text-sm ml-6 mt-8 "
      >
        lesen
      </button>
    </div>
  );
}

export default diaryCard;
