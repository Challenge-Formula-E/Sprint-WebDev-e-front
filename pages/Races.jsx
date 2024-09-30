/* eslint-disable react/prop-types */
import { LuPlay, LuClock, LuCloudSun, LuCalendarDays } from "react-icons/lu";
import { BiShare } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Monaco from "../assets/monaco.png";
import PolePosition from "../assets/pole-position.png";
import MahindraIcon from "../assets/mahindra_icon.svg";
import Holanda from "../assets/holanda.png";
import Japao from "../assets/japao.png";
import Brasil from "../assets/brasil.png";
import SpRun from "../assets/sp_run.png";
import MonacoRun from "../assets/monaco_run.png";
import JapaoRun from "../assets/japao_run.png";
import Seta from "../assets/seta.png";
import Slider from "react-slick";
import "../styles/slider.css";
import { Slide } from "../componentes/Slide";

function Races() {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={Seta}
        alt="Seta"
        className={className}
        onClick={onClick}
        style={{ ...style, rotate: "180deg", marginTop: "-24px" }}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={Seta}
        alt="Seta"
        className={className}
        onClick={onClick}
        style={{ ...style }}
      />
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Mostra apenas um slide
          slidesToScroll: 1,
          centerMode: true, // Mantenha o modo central
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-t from-[#011AFE] to-[#111111] via-[#111111] via-30%">
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4  items-center relative bg-[url('./assets/carro.png')] w-full min-h-[30vw] justify-center p-16 bg-bottom bg-no-repeat bg-cover lg:flex-row lg:items-end lg:p-4 lg:gap-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <a
            href="https://www.youtube.com/watch?v=vYXKSfI-wNM"
            target="_BLANK"
            className="flex z-10 items-center justify-center w-36 h-24 rounded-3xl bg-gradient-to-b from-[#011098] via-80% via-[#0084FE] to-[#01CAFE]"
          >
            <LuPlay className="size-16 -mr-2" />
          </a>
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
      <section className="flex flex-col lg:flex-row justify-center gap-16">
        <div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <img src={Monaco} alt="Bandeira de Monaco" className="max-w-48" />
            <div>
              <h1 className="text-7xl font-['Sedgwick_Ave']">Mônaco</h1>
              <p className="text-zinc-400 text-2xl">2024 MÔNACO E-PRIX</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-16 p-4 text-center lg:text-left">
            <h2 className="text-5xl -mb-2">Weekend Schedule</h2>
            <div className="text-zinc-400 text-2xl flex gap-6 items-center justify-between text-left">
              <p>FREE PRACTICE 1 02:25-03:15</p>
              <div className="border border-zinc-400 px-3 py-1">FINISHED</div>
            </div>
            <div className="text-zinc-400 text-2xl flex gap-6 items-center justify-between text-left">
              <p>FREE PRACTICE 2 04:05-04:55</p>
              <div className="border border-zinc-400 px-3 py-1">FINISHED</div>
            </div>
            <div className="text-white font-semibold text-3xl flex gap-6 items-center justify-between text-left">
              <p>RACE 09:00-11:00</p>
              <div className="border border-zinc-400 px-3 py-1">TODAY</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center relative">
          <h1 className="font-bold text-5xl mb-2 lg;mb-0">POLE POSITION</h1>
          <img
            src={PolePosition}
            className="bg-gradient-to-b from-zinc-900 max-w-[70%]"
            alt="POLE POSITION NOW"
          />
          <button className="absolute top-16 right-20 text-md lg:right-28 lg:text-xl items-center flex flex-col">
            <BiShare className="-scale-x-100 size-8" />
            SHARE
          </button>
          <h2 className="flex items-center text-4xl lg:text-5xl font-light italic gap-4 mb-0">
            NICK DE VRIES
            <img
              src={Holanda}
              alt="Bandeira da Holanda"
              className="h-16 w-18 rounded-lg"
            />
          </h2>
          <p className="flex items-center text-zinc-400 gap-1 text-xl font-medium italic">
            <img src={MahindraIcon} className="size-7" />
            Mahindra Racing
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-20">
        <button className="bg-gradient-to-r from-[#0084FE] to-[#011AFE] py-12 px-8 lg:px-32 text-3xl lg:text-7xl font-medium font-['Righteous'] rounded-3xl hover:opacity-80 transition-all">
          buy your ticket now
        </button>
        {/* <p className="m-2 text-lg font-bold">Click Here</p> */}
        <div className="w-4/5 mt-12">
          <Slider {...settings}>
            <Slide
              day="14"
              month="APR"
              round="7"
              flag={Brasil}
              img={SpRun}
              place="São Paulo"
              when="ENDED"
            />
            <Slide
              day="27"
              month="APR"
              round="8"
              flag={Monaco}
              img={MonacoRun}
              place="Mônaco"
              when="TODAY"
            />
            <Slide
              day="09"
              month="MAY"
              round="9"
              flag={Japao}
              img={JapaoRun}
              place="Japão"
              when="NEXT"
            />
            <Slide
              day="14"
              month="APR"
              round="7"
              flag={Brasil}
              img={SpRun}
              place="São Paulo"
              when="ENDED"
            />
            <Slide
              day="27"
              month="APR"
              round="8"
              flag={Monaco}
              img={MonacoRun}
              place="Mônaco"
              when="TODAY"
            />
            <Slide
              day="09"
              month="MAY"
              round="9"
              flag={Japao}
              img={JapaoRun}
              place="Japão"
              when="NEXT"
            />
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Races;
