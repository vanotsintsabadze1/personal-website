export default function Socials() {
  return (
    <>
      <div className="w-[200px] h-[60px] flex justify-evenly items-center">
        <img
          className="w-[25px] h-[25px] cursor-pointer"
          src="/icons/socials_icons/instagram.png"
          onClick={() => {
            window.open("https://www.instagram.com/cuatro.foliati/");
          }}
        />
        <img
          className="w-[25px] h-[25px] cursor-pointer"
          src="/icons/socials_icons/github.png"
          onClick={() => {
            window.open("https://github.com/vanotsintsabadze1");
          }}
        />
        <img
          className="w-[25px] h-[25px] cursor-pointer"
          src="/icons/socials_icons/mail.png"
          onClick={() => {
            window.alert("tsintsabadzevano@gmail.com");
          }}
        />
      </div>
    </>
  );
}
