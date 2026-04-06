import SiteHeader      from "../components/SiteHeader";
import SiteFooter      from "../components/SiteFooter";
import NewsletterBanner from "../components/NewsletterBanner";
import SearchOverlay   from "../components/SearchOverlay";
import useNewsletter from "../hooks/useNewsletter";
import useSearch     from "../hooks/useSearch";
import type {ReactNode} from "react";

/**
 * PageLayout — the shared shell for every page.
 *
 * Provides:
 *  - Fixed SiteHeader (logo + newsletter trigger + search trigger)
 *  - Fixed NewsletterBanner (slides in from top)
 *  - Full-screen SearchOverlay
 *  - Slot for page content via `children`
 *  - SiteFooter (newsletter band + nav + social + legal)
 *
 * Usage:
 * ```jsx
 * <PageLayout>
 *   <HeroFilmList films={FILMS} />
 *   <FilmGrid films={FILMS} title="Coming Soon" />
 * </PageLayout>
 * ```
 *
 * @param {{
 *   children: React.ReactNode,
 *   logoHref?: string,
 *   newsletterDelay?: number,
 *   copyrightOwner?: string,
 * }} props
 */

interface PageLayoutProp {
    children: ReactNode;
    logoHref?: string;
    newsletterDelay?: number;
    copyrightOwner?: string;
}

const PageLayout = ({
  children,
  logoHref = "/",
  newsletterDelay = 3000,
  copyrightOwner = "SBP Films LLC",
}: PageLayoutProp) => {
  const newsletter = useNewsletter(newsletterDelay);
  const search     = useSearch();

    return (
    <div style={{ position: "relative", minHeight: "100vh", minWidth: "100%", background: "#000" }}>
      {/* ── Global overlays (rendered above everything) ── */}
      <NewsletterBanner
        isOpen={newsletter.isOpen}
        onClose={newsletter.close}
        email={newsletter.email}
        onChange={newsletter.setEmail}
        onSubmit={newsletter.submit}
        submitted={newsletter.submitted}
      />

      <SearchOverlay
        isOpen={search.isOpen}
        onClose={search.close}
        query={search.query}
        onChange={search.setQuery}
        onSubmit={search.submit}
        inputRef={search.inputRef}
      />

      {/* ── Fixed header ── */}
      <SiteHeader
        logoHref={logoHref}
        onNewsletterOpen={newsletter.open}
        onSearchOpen={search.open}
      />

      {/* ── Page-specific content ── */}
      <main>
        {children}
      </main>

      {/* ── Footer ── */}
      <SiteFooter copyrightOwner={copyrightOwner} />
    </div>
  );
};

export default PageLayout
