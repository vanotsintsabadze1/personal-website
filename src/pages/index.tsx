import Head from "next/head";
import Homepage from "@/components/homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <div className="w-[full ] h-[100vh] bg-[#2e2f31]">
        <div className="w-[full] h-full flex justify-center items-center flex-col">
          <Homepage />
        </div>
      </div>
    </>
  );
}
