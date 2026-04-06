import PageLayout     from "../layouts/PageLayout";
import HeroFilmList  from "../components/HeroFilmList";
import FilmGrid      from "../components/FilmGrid";
import { FILMS }     from "../data";

/**
 * Home page — the SBP homepage.
 *
 * Swap `FILMS` for any array of Film objects to reuse this page
 * on a different site or section.
 */
const HomePage = () => (
    <PageLayout>
        <HeroFilmList films={FILMS} defaultActiveIndex={0}/>
        <FilmGrid films={FILMS} title="Coming Soon"/>
    </PageLayout>
);
export default HomePage;
