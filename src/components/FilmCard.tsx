const styles = `
  .film-card {
    position: relative; overflow: hidden;
    aspect-ratio: 16 / 9;
    background: #111;
    cursor: pointer;
  }
  .film-card__img {
    width: 100%; height: 100%; object-fit: cover;
    opacity: 0.8;
    transition: transform 0.5s ease, opacity 0.3s ease;
  }
  .film-card:hover .film-card__img {
    transform: scale(1.04);
    opacity: 1;
  }
  .film-card__play {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 44px; height: 44px;
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .film-card:hover .film-card__play { opacity: 1; }
  .film-card__play svg { width: 14px; height: 14px; fill: #fff; margin-left: 3px; }

  .film-card__info {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 32px 16px 16px;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
    transform: translateY(4px);
    transition: transform 0.3s ease;
  }
  .film-card:hover .film-card__info { transform: translateY(0); }
  .film-card__title {
    font-family: 'EB Garamond', serif;
    font-size: 20px; font-weight: 400; color: #fff;
  }
  .film-card__year {
    font-size: 11px; letter-spacing: 0.1em; color: #aaa;
    margin-top: 2px;
  }
  .film-card__label {
    display: inline-block;
    font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
    color: #888; border: 1px solid #333;
    padding: 2px 6px; border-radius: 2px; margin-top: 4px;
  }
`;

/**
 * Single film card for the grid.
 *
 * @param {{
 *   title: string,
 *   year: string,
 *   href: string,
 *   image: string,
 *   label?: string,
 *   onClick?: () => void,
 * }} props
 */
interface FilmCardProp {
  title: string,
  year: string,
  href?: string,
  image: string,
  label?: string,
  onClick?: () => void,
}
export default function FilmCard({ title, year, href, image, label, onClick }: FilmCardProp) {
  const handleClick = () => {
    if (onClick) { onClick(); return; }
    //window.open(href, "_blank", "noopener,noreferrer");
    window.open(href, "_self", "noopener,noreferrer");
  };

  return (
    <>
      <style>{styles}</style>
      <article
        className="film-card"
        onClick={handleClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        aria-label={`${title} (${year})`}
      >
        <img className="film-card__img" src={image} alt={title} loading="lazy" />

        <div className="film-card__play" aria-hidden="true">
          <svg viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 10,6 0,12" />
          </svg>
        </div>

        <div className="film-card__info">
          <div className="film-card__title">{title}</div>
          <div className="film-card__year">{year}</div>
          {label && <div className="film-card__label">{label}</div>}
        </div>
      </article>
    </>
  );
}
