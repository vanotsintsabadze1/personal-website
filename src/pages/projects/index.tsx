import projects from "./plist.json";

export default function home() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#1f1f1f] flex justify-around items-center flex-col ">
        {Object.values(projects).map((t, index) => (
          <div className="w-[300px] h-[250px] rounded-xl bg-slate-100 flex flex-col items-center">
            <img className="w-full h-[120px] rounded-xl" />
            <h3 className="font-['Raleway] text-[20px] font-semibold mt-5">
              {t.name}
            </h3>
            <p className="font-['Raleway'] text-[12px] text-center w-[200px] mt-2">
              {t.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
