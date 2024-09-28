/* eslint-disable react/prop-types */
export const Slide = ({day, month, round, flag, img, place, when}) => {
  return (
    <div className="bg-gradient-to-b from-[#011AFE] to-[#01CAFE] p-1 rounded-[2rem] max-w-fit">
      <div className="bg-slate-200 rounded-[1.75rem] py-8 px-6 flex flex-col items-center h-full">
        <div className="flex items-end justify-around gap-4">
          <div className="bg-gradient-to-b from-[#011AFE] to-[#01CAFE] p-0.5 rounded-xl">
            <div className="rounded-lg text-black px-4 py-2 flex flex-col items-center bg-slate-300">
              <p className="font-bold text-4xl">{day}</p>
              <p className="text-3xl">{month}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="bg-gradient-to-r from-[#011AFE to-[#01CAFE] inline-block text-transparent bg-clip-text relative font-bold text-5xl">
              {when}
              <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-[#011AFE to-[#01CAFE]"></span>
            </p>
            <p className="mt-1 text-black font-bold text-2xl">ROUND {round}</p>
          </div>
        </div>
        <div className="flex text-black text-4xl font-['Sedgwick_Ave'] items-center justify-center gap-4 my-8">
          <img src={flag} className="max-w-16" />
          {place}
        </div>
        <img src={img} className="max-w-60" />
      </div>
    </div>
  );
};
