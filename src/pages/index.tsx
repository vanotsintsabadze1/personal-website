import Head from "next/head";
import Homepage from "@/components/Homepage";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>VANO</title>
      </Head>
      <div className="w-[full ] h-[100vh] bg-[#1f1f1f]">
        <div className="w-[full] h-full flex justify-center items-center flex-col">
          <Homepage />
        </div>
        <Sidebar />
      </div>
    </>
  );
}
