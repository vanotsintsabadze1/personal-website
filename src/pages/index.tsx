import Head from "next/head";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>VANO</title>
      </Head>
      <div className="w-[full ] h-[100vh] bg-[#2e2f31]">
        <div className="w-[full] h-full flex justify-center items-center flex-col">
          <Homepage />
        </div>
      </div>
    </>
  );
}
