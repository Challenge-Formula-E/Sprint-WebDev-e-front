import { LuPlay, LuClock, LuCloudSun, LuCalendarDays } from "react-icons/lu";
import { BiShare } from "react-icons/bi";
import Monaco from "../assets/monaco.png";
import PolePosition from "../assets/pole-position.png";

function Races() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="flex relative bg-[url('./assets/carro.png')] w-full min-h-[30vw] items-end justify-center p-4 bg-bottom bg-no-repeat bg-cover ">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="flex z-10 items-center justify-center w-36 h-24 rounded-3xl bg-gradient-to-b from-[#011098] via-80% via-[#0084FE] to-[#01CAFE]">
            <LuPlay className="size-16 -mr-2" />
          </div>
          <div className="flex flex-col mb-4 mx-4 z-10">
            <h1 className="font-['Secular_One'] text-4xl">
              Race Day - <span className="font-['Sedgwick_Ave']">Mônaco</span>
            </h1>
            <div className="flex gap-4">
              <p className="flex items-center gap-1 font-semibold text-zinc-400">
                <LuClock /> 09:00
              </p>
              <p className="flex items-center gap-1 font-semibold text-zinc-400">
                <LuCloudSun /> morning
              </p>
              <p className="flex items-center gap-1 font-semibold text-zinc-400">
                <LuCalendarDays /> 27/04
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-0.5 bg-zinc-400 my-12"></div>
      </section>
      <section className="flex justify-center gap-16">
        <div>
          <div className="flex items-center gap-12">
            <img src={Monaco} alt="Bandeira de Monaco" className="max-w-48" />
            <div>
              <h1 className="text-7xl font-['Sedgwick_Ave']">Mônaco</h1>
              <p className="text-zinc-400 text-2xl">2024 MÔNACO E-PRIX</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl">Weekend Schedule</h2>
            <div>
              <p>FREE PRACTICE 1 02:25-03:15</p>
              <div>FINISHED</div>
            </div>
            <div>
              <p>FREE PRACTICE 2 04:05-04:55</p>
              <div>FINISHED</div>
            </div>
            <div>
              <p>RACE 09:00-11:00</p>
              <div>TODAY</div>
            </div>
          </div>
        </div>
        <div>
          <h1>POLE POSITION</h1>
          <img
            src={PolePosition}
            className="bg-gradient-to-b from-zinc-900"
            alt="POLE POSITION NOW"
          />
          <button>
            <BiShare className="-scale-x-100" />
            SHARE
          </button>
        </div>
      </section>
    </>
  );
}

export default Races;
