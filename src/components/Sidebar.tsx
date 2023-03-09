export default function Sidebar() {
  return (
    <>
      <div className="absolute w-[55px] h-[300px] rounded-2xl top-[35%] left-[2%] flex flex-col justify-around items-center">
        <button className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center">
          <img src="/icons/home.png" className="max-w-[22px] max-h-[22px]" />
        </button>
        <button className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center">
          <img
            src="/icons/suitcase.png"
            className="max-w-[22px] max-h-[22px]"
          />
        </button>
        <button className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center">
          <img src="/icons/contact.png" className="max-w-[22px] max-h-[22px]" />
        </button>
      </div>
    </>
  );
}
