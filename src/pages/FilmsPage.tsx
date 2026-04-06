import PageLayout  from "../layouts/PageLayout";
import FilmGrid    from "../components/FilmGrid";
import { FILMS }   from "../data";

/**
 * Films archive page — demonstrates reusing PageLayout on a second page.
 *
 * The header, footer, newsletter banner, and search overlay are all
 * inherited from PageLayout. Only the page-specific content changes.
 */
const FilmsPage = () => (
    // newsletterDelay={0} skips the auto-pop since users are already
    // browsing — they can still open it from the header button.
    <PageLayout newsletterDelay={Infinity}>
        {/* Page-specific hero — a simple text header instead of film images */}
        <section
            style={{
                padding: "180px 32px 80px",
                background: "#000",
                borderBottom: "1px solid #1a1a1a",
            }}
        >
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
                Films
            </h1>
        </section>

        {/* Reuse the same FilmGrid with a different label */}
        <FilmGrid films={FILMS} title="All Films"/>
    </PageLayout>
);
/**
 * Films archive page — demonstrates reusing PageLayout on a second page.
 *
 * The header, footer, newsletter banner, and search overlay are all
 * inherited from PageLayout. Only the page-specific content changes.
 */
export default FilmsPage;
