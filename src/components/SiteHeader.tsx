import SBPLogo from "./SBPLogo.tsx";

const styles = `
  .site-header {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 22px 32px;
    display: flex; align-items: center; justify-content: space-between;
    mix-blend-mode: difference;
  }
  .site-header__logo {
    color: #fff;
    display: flex; align-items: center;
  }
  .site-header__logo:hover { opacity: 0.7; }
  .site-header__nav {
    display: flex; align-items: center; gap: 28px;
  }
  .site-header__nav-btn {
    background: none; border: none; color: #fff;
    font-family: 'Karla', sans-serif; font-size: 11px;
    letter-spacing: 0.12em; text-transform: uppercase;
    transition: opacity 0.2s ease;
  }
  .site-header__nav-btn:hover { opacity: 0.6; }
  .site-header__search-btn {
    background: none; border: none;
    padding: 4px; display: flex; align-items: center;
    color: #fff;
  }
  .site-header__search-btn svg {
    width: 18px; height: 18px;
    transition: opacity 0.2s ease;
  }
  .site-header__search-btn:hover svg { opacity: 0.6; }

  @media (max-width: 640px) {
    .site-header { padding: 16px 20px; }
  }
`;

const SearchIcon = () => (
  <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path
      d="M9.57143 18.6429C14.5814 18.6429 18.6429 14.5814 18.6429 9.57143H17.6429C17.6429 14.0292 14.0292 17.6429 9.57143 17.6429V18.6429ZM0.5 9.57143C0.5 14.5814 4.56142 18.6429 9.57143 18.6429V17.6429C5.1137 17.6429 1.5 14.0292 1.5 9.57143H0.5ZM9.57143 0.5C4.56142 0.5 0.5 4.56142 0.5 9.57143H1.5C1.5 5.1137 5.1137 1.5 9.57143 1.5V0.5ZM18.6429 9.57143C18.6429 4.56142 14.5814 0.5 9.57143 0.5V1.5C14.0292 1.5 17.6429 5.1137 17.6429 9.57143H18.6429ZM21.3535 20.6465L15.9859 15.2788L15.2788 15.9859L20.6464 21.3536L21.3535 20.6465Z"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
);

interface SiteHeaderProp {
    onNewsletterOpen: () => void,
    onSearchOpen: () => void,
    logoHref?: string,
}

/**
 * Fixed site header with logo, newsletter trigger, and search trigger.
 *
 * @param {{
 *   onNewsletterOpen: () => void,
 *   onSearchOpen: () => void,
 *   logoHref?: string,
 * }} props
 */
export default function SiteHeader({
  onNewsletterOpen,
  onSearchOpen,
  logoHref = "/",
}: SiteHeaderProp) {
  return (
    <>
      <style>{styles}</style>
      <header className="site-header">
        <a href={logoHref} className="site-header__logo" title="SBP">
          <SBPLogo width={72} />
        </a>

        <nav className="site-header__nav" aria-label="Site navigation">
          <button
            className="site-header__nav-btn"
            onClick={onNewsletterOpen}
          >
            Newsletter
          </button>
          <button
            className="site-header__search-btn"
            onClick={onSearchOpen}
            aria-label="Open search"
          >
            <SearchIcon />
          </button>
        </nav>
      </header>
    </>
  );
}
