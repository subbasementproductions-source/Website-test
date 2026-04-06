import PageLayout from "../layouts/PageLayout";
import FilmGrid from "../components/FilmGrid";
import {FILMS} from "../data";
import {useParams} from "react-router-dom";
import type {Film} from "../types";


const styles = `
  .hero-film {
    position: relative; width: 100%; height: 100vh;
    overflow: hidden;
  }

  /* Background stack */
  .hero-film__bg { position: absolute; inset: 0; }
  .hero-film__bg img {
    position: absolute; inset: 0;
    width: 100%; height: 100%; object-fit: cover;
    transition: opacity 0.8s ease;
  }
  .hero-film__overlay {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.15) 0%,
      rgba(0,0,0,0.05) 40%,
      rgba(0,0,0,0.6) 100%
    );
  }

  /* Content bar along the bottom */
  .hero-film__content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 0 32px 40px;
    display: flex; align-items: flex-end; justify-content: space-between;
  }

  /* Film title list */
  .hero-film__list { list-style: none; }
  .hero-film__item { cursor: pointer; }
  .hero-film__title {
    font-family: 'EB Garamond', serif;
    font-size: clamp(28px, 5vw, 62px);
    font-weight: 400; line-height: 1.05;
    color: rgba(255,255,255,0.3);
    letter-spacing: -0.01em;
    display: flex; align-items: baseline; gap: 10px;
    padding: 4px 0;
    transition: color 0.3s ease;
  }
  .hero-film__item.active .hero-film__title,
  .hero-film__item:hover .hero-film__title {
    color: #fff;
  }
  .hero-film__title sup {
    font-size: 0.35em; letter-spacing: 0.1em;
    font-family: 'Karla', sans-serif; opacity: 0.8;
  }

  /* View arrow CTA */
  .hero-film__cta {
    display: flex; align-items: center; gap: 12px;
    color: rgba(255,255,255,0.5);
    font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
    cursor: pointer; padding-bottom: 8px;
    transition: color 0.2s ease;
    background: none; border: none;
    flex-shrink: 0;
  }
  .hero-film__cta:hover { color: #fff; }
  .hero-film__cta svg { width: 40px; height: 14px; fill: currentColor; }

  @media (max-width: 640px) {
    .hero-film__content { padding: 0 20px 32px; }
    .hero-film__cta { display: none; }
  }
`;
/**
 * Films archive page — demonstrates reusing PageLayout on a second page.
 *
 * The header, footer, newsletter banner, and search overlay are all
 * inherited from PageLayout. Only the page-specific content changes.
 */
const FilmDetailPage = () => {

    // The key 'id' matches the ':id' defined in the Route path
    const {id} = useParams();
    console.log(id)
    const film = FILMS.find((film) => film.href == `/films/${id}`) as Film

    // newsletterDelay={0} skips the auto-pop since users are already
    // browsing — they can still open it from the header button.
    return (
        <>
            <style>{styles}</style>
            <PageLayout newsletterDelay={Infinity}>
                {/* Page-specific hero — a simple text header instead of film images */}

                <section className="hero-film" aria-label="Featured films">
                    {/* Crossfading background images */}
                    <div className="hero-film__bg" aria-hidden="true">
                        <img
                            key={film.title}
                            src={film.bg}
                            alt=""
                        />
                        <div className="hero-film__overlay"/>
                    </div>

                    <div className="hero-film__content">
                        <p
                            style={{
                                fontFamily: "'Karla', sans-serif",
                                fontSize: 11,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: "#555",
                                marginBottom: 16,
                            }}
                        >
                            SBP
                        </p>
                        <h1
                            style={{
                                fontFamily: "'EB Garamond', serif",
                                fontSize: "clamp(40px, 6vw, 80px)",
                                fontWeight: 400,
                                color: "#fff",
                                lineHeight: 1,
                            }}
                        >
                            {id?.toUpperCase()}
                        </h1>
                    </div>

                </section>

                <section
                    style={{
                        padding: "32px 32px 80px",
                        background: "#000",
                        borderBottom: "1px solid #1a1a1a",
                    }}
                >

                </section>
                {/* Reuse the same FilmGrid with a different label */}
                <FilmGrid films={FILMS} title="All Films"/>
            </PageLayout>
        </>
    );
};
/**
 * Films archive page — demonstrates reusing PageLayout on a second page.
 *
 * The header, footer, newsletter banner, and search overlay are all
 * inherited from PageLayout. Only the page-specific content changes.
 */
export default FilmDetailPage;
