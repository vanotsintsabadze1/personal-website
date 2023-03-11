import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  return (
    <>
      <div className="absolute w-[55px] h-[250px] rounded-2xl top-[37%] left-[2%] flex flex-col justify-around items-center">
        <button
          className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center"
          onClick={() => {
            router.push("/");
          }}
        >
          <img
            src="/icons/sidebar_icons/home.png"
            className="max-w-[22px] max-h-[22px]"
          />
        </button>
        <button
          className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center"
          onClick={() => {
            router.push("/projects");
          }}
        >
          <img
            src="/icons/sidebar_icons/suitcase.png"
            className="max-w-[22px] max-h-[22px]"
          />
        </button>
      </div>
    </>
  );
}
