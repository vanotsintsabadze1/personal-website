export default function Homepage() {
  return (
    <>
      <div className="w-[90%] h-full flex justify-center items-center flex-col">
        <h1 className="font-['Roboto'] font-light text-[90px] tracking-widest text-white">
          VANO
        </h1>
        <p className="font-['Roboto'] font-medium text-[14px] text-white text-center tracking-wider w-[240px]">
          Hey, I'm Vano, a 17 year old developer from
          <b> Georgia, Batumi.</b>
          <br />
          <br />
          I'm occupied with coding, weightlifting and armwrestling, as well
          listening to music.
        </p>
        <div className="w-[300px] h-[60px] border-b-white border-b-[1px] rounded-lg flex justify-around items-center mt-4">
          <img className="max-w-[27px] max-h-[27px]" src="/icons/html.png" />
          <img className="max-w-[27px] max-h-[27px]" src="/icons/css.png" />
          <img className="max-w-[27px] max-h-[27px]" src="/icons/js.png" />
          <img className="max-w-[27px] max-h-[27px]" src="/icons/python.png" />
          <img className="max-w-[27px] max-h-[27px]" src="/icons/react.png" />
          <img className="max-w-[27px] max-h-[27px]" src="/icons/next.png" />
        </div>
      </div>
    </>
  );
}
