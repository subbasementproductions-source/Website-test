import { useState } from "react";
import type {Film} from "../types";
import '../styles/herofilms.css'


/**
 * Full-viewport hero with a crossfading background per film
 * and a hoverable film list along the bottom.
 *
 * @param {{
 *   films: import('../../data').Film[],
 *   defaultActiveIndex?: number,
 * }} props
 */
interface HeroFimListProps {
  films: Film[];
  defaultActiveIndex: number;
}

const HeroFilmList = ({ films, defaultActiveIndex }: HeroFimListProps) => {
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveIndex ?? films.length - 1
  );

  const activeFilm = films[activeIndex];

  const handleCTA = () => {
    window.open(activeFilm.href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="hero-film" aria-label="Featured films">
        {/* Crossfading background images */}
        <div className="hero-film__bg" aria-hidden="true">
          {films.map((film, i) => (
            <img
              key={film.title}
              src={film.bg}
              alt=""
              style={{ opacity: i === activeIndex ? 1 : 0 }}
            />
          ))}
          <div className="hero-film__overlay" />
        </div>

        <div className="hero-film__content">
          {/* Film title list */}
          <ul className="hero-film__list">
            {films.map((film, i) => (
              <li
                key={film.title}
                className={`hero-film__item${i === activeIndex ? " active" : ""}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => window.open(film.href, "_self", "noopener,noreferrer")}
              >
                <span className="hero-film__title">
                  {film.title}
                  <sup>{film.year}</sup>
                </span>
              </li>
            ))}
          </ul>

          {/* Arrow CTA */}
          <button className="hero-film__cta" onClick={handleCTA}>
            <svg viewBox="0 0 55 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <polygon points="43.3,0 55,10 43.3,20 42.4,19.1 52.2,10.7 0,10.7 0,9.3 52.2,9.3 42.4,0.9 43.3,0" />
            </svg>
            View Film
          </button>
        </div>
      </section>
    </>
  );
};
/**
 * Full-viewport hero with a crossfading background per film
 * and a hoverable film list along the bottom.
 *
 * @param {{
 *   films: import('../../data').Film[],
 *   defaultActiveIndex?: number,
 * }} props
 */
export default HeroFilmList
