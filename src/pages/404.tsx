export default function Custom404() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#1f1f1f] flex justify-center items-center">
        <div className="w-[300px] h-[350px] border-[1px] border-white flex justify-center items-center flex-col">
          <h1 className="text-white font-bold font-['Raleway'] text-[100px] mt-[-8%]">
            404
          </h1>
          <p className="text-white text-[20px] font-['Raleway'] font-light">
            Hey!
          </p>
          <p className="text-[12px] text-white font-['Raleway] font-light text-center">
            You took a wrong path!
            <br />
            It's easy to go back, though.
            <br />
            Just click the home button.
          </p>
        </div>
      </div>
    </>
  );
}
