import Socials from "./Socials";

export default function Languages() {
  return (
    <>
      <div className="w-full h-[35%] flex items-center flex-col">
        <div className="w-[300px] h-[60px] border-b-white border-b-[1px] rounded-lg flex justify-around items-center mt-4">
          <img
            className="max-w-[27px] max-h-[27px]"
            src="/icons/language_icons/html.png"
          />
          <img
            className="max-w-[27px] max-h-[27px]"
            src="/icons/language_icons/css.png"
          />
          <img
            className="max-w-[27px] max-h-[27px]"
            src="/icons/language_icons/js.png"
          />
          <img
            className="max-w-[27px] max-h-[27px]"
            src="/icons/language_icons/python.png"
          />
          <img
            className="max-w-[27px] max-h-[27px]"
            src="/icons/language_icons/react.png"
          />
          <img
            className="max-w-[27px] max-h-[27px]"
            src="/icons/language_icons/next.png"
          />
        </div>
        <Socials />
      </div>
    </>
  );
}
