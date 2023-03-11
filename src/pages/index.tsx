import Head from "next/head";
import Homepage from "@/components/Homepage";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Head>
        <title>VΛNO</title>
      </Head>

      <div className="w-[full ] h-[100vh] bg-[#1f1f1f]">
        <div className="w-full h-full flex justify-center items-center flex-wrap">
          <Homepage />
        </div>
      </div>
    </>
  );
}
