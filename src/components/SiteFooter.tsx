import { FOOTER_LINKS, LEGAL_LINKS, SOCIAL_LINKS } from "../data";


// useState needs to be imported – kept at top of file in real project
import {useState} from "react";
import * as React from "react";
import '../styles/footer.css'
import {isValidEmail} from "../utils/isValidEmail.ts";

interface SiteFooterProp {
  newsletterText?: string;
  copyrightOwner: string;
}

/**
 * Full-page footer: newsletter band + nav/legal/social links + copyright.
 *
 * @param {{
 *   newsletterText?: string,
 *   copyrightOwner?: string,
 * }} props
 */
const SiteFooter = ({
  newsletterText = "Get our emails. Letters from our filmmakers, new trailers, podcasts, merch, and more. Not too often — just enough.",
  copyrightOwner = "SBP Films LLC",
}: SiteFooterProp) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit  = (e: React.SyntheticEvent<HTMLElement>) => {

    e?.preventDefault();
    if (!isValidEmail(email)) return;
    console.log("Footer newsletter signup:", email);
    setSubmitted(true);
  };

  return (
      <>

        {/* Newsletter Band */}
        <div className="newsletter-band">
          <div>
            <p className="newsletter-band__eyebrow">Want More SBP?</p>
            <p className="newsletter-band__body">{newsletterText}</p>
            {submitted ? (
                <p className="newsletter-band__success">You're in — thanks!</p>
            ) : (
                <div className="newsletter-band__form">
                  <input
                      type="email"
                      className="newsletter-band__input"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                  />
                  <button className="newsletter-band__submit" onClick={handleSubmit}>
                    Sign Up
                  </button>
                </div>
            )}
          </div>

          <div>
            <p className="newsletter-band__eyebrow">More SBP</p>
            <ul className="social-list">
              {SOCIAL_LINKS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="site-footer">
          <div className="site-footer__grid">
            <nav className="footer-nav" aria-label="Footer navigation">
              <ul>
                {FOOTER_LINKS.map((l) => (
                    <li key={l.label}>
                      <a
                          href={l.href}
                          target={l.external ? "_blank" : undefined}
                          rel={l.external ? "noopener noreferrer" : undefined}
                      >
                        {l.label}
                      </a>
                    </li>
                ))}
              </ul>
              <ul>
                {LEGAL_LINKS.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                ))}
              </ul>
            </nav>

            <div className="footer-social">
              {SOCIAL_LINKS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
              ))}
            </div>

            <p className="footer-copy">
              © {new Date().getFullYear()} {copyrightOwner}. All rights reserved.
            </p>
          </div>
        </footer>
      </>
  );
};

export default SiteFooter
