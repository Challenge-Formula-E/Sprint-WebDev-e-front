import "../styles/news.css";
import logo from "../assets/logo.png";
import pessoas from "../assets/pessoas.png";
import publico from "../assets/pessoas2.png";

function News() {
  return (
    <div className="news-page">
      <section className="topo">
        <img src={logo} alt="Formula E Logo" className="logo" />
        <h1>Track revolution with a touch of electricity</h1>
      </section>

      <h2 className="titulo">Last News</h2>

      <section className="noticia-section">
        <div className="noticia">
          <h2 className="h2-news text-xl">
            SEASON 11 CALENDAR: The Formula E races in 2024/2025
          </h2>
          <p className="p-news">NEWS · 12 JUN 2024</p>
          <p className="calendar-races p-news">
            The provisional calendar for Season 11 is here, bringing 17 races
            across 11 locations with exciting destinations on the horizon.{" "}
            <br /> Here&apos;s a rundown of the all-important dates across the
            2024/2025 season.
          </p>
        </div>
        <div className="image-container">
          <img className="" src={pessoas} alt="" />
        </div>
      </section>

      <section className="news-section1">
        <div className="noticia">
          <h2 className="h2-news">
            International Women&apos;s Day: Hearing From Incredible Talent In
            Formula E
          </h2>
          <p>NEWS · 07 MAR 2024</p>
          <p className="womans-day p-news">
            “Days like International Women’s Day give us the opportunity to
            reflect and celebrate how far we&apos;ve come, <br /> but
            importantly look forward to the possibilities ahead when we truly
            break down barriers. <br /> At Formula E, I believe inclusion isn&apos;t
            ‘nice’ to have, it&apos;s critical to our success.”
          </p>
        </div>
        <div className="image-container">
          <img className="" src={publico} alt="" />
        </div>
      </section>

      <section className="news-section">
        <div className="noticia">
          <h2 className="h2-news">
            The Big Stars of Motorsport Who Participated in the Formula E Rookie
            Tests
          </h2>
          <p className="p-news">NEWS · 16 APR 2023</p>
        </div>
      </section>
      <div className="piloto"></div>
      <p className="p-meio p-news">
        With the FIA Formula E Rookie Test returning next week in Berlin on
        April 24, <br /> we look at some big names who have found themselves
        behind the wheel of the <br /> championship&apos;s all-electric race car
        in the last three tests.
      </p>
    </div>
  );
}

export default News;
