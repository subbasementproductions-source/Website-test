import FilmCard from "./FilmCard";
import type {Film} from "../types";

const styles = `
  .film-grid-section { padding: 80px 32px; background: #000; }
  .film-grid-section__eyebrow {
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: #555; margin-bottom: 40px;
  }
  .film-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 2px;
  }
  @media (max-width: 640px) {
    .film-grid-section { padding: 48px 20px; }
    .film-grid { grid-template-columns: 1fr; }
  }
`;

interface FilmGridProp {
    films: Film[],
    title?: string,
}

/**
 * Responsive grid of FilmCards.
 *
 * @param {{
 *   films: import('../../data').Film[],
 *   title?: string,
 * }} props
 */
const FilmGrid = ({ films, title = "Coming Soon" }: FilmGridProp) => (
    <>
        <style>{styles}</style>
        <section className="film-grid-section" aria-label={title}>
            {title && <p className="film-grid-section__eyebrow">{title}</p>}
            <div className="film-grid">
                {films.map((film) => (
                    <FilmCard
                        key={film.title}
                        title={film.title}
                        year={film.year}
                        href={film.href}
                        image={film.image}
                        label={film.label}
                    />
                ))}
            </div>
        </section>
    </>
);
/**
 * Responsive grid of FilmCards.
 *
 * @param {{
 *   films: import('../../data').Film[],
 *   title?: string,
 * }} props
 */
export default FilmGrid
