import Info from "./Info";
import Languages from "./Languages";
export default function Homepage() {
  return (
    <>
      <div className="w-[95%] h-[60%] flex justify-end items-end flex-col">
        <Info />
      </div>
      <Languages />
    </>
  );
}
