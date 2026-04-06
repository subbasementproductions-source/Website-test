import * as React from "react";
import '../styles/newletterbanner.css'

interface NewsLetterBannerProp {
  isOpen: boolean,
  onClose: () => void,
  email: string,
  onChange: (val: string) => void,
  onSubmit: (e: React.SyntheticEvent<HTMLElement>) => void,
  submitted: boolean,
  description?: string,
  ctaText?: string,
}

/**
 * Slide-down newsletter signup banner fixed to the top of the viewport.
 *
 * @param {{
 *   isOpen: boolean,
 *   onClose: () => void,
 *   email: string,
 *   onChange: (val: string) => void,
 *   onSubmit: (e?: Event) => void,
 *   submitted: boolean,
 *   description?: string,
 *   ctaText?: string,
 * }} props
 */
export default function NewsletterBanner({
  isOpen,
  onClose,
  email,
  onChange,
  onSubmit,
  submitted,
  description = "Get our emails. Letters from our filmmakers, new trailers, podcasts, merch, and more. Not too often — just enough.",
  ctaText = "Want More SBP?",
}: NewsLetterBannerProp) {
  return (
    <>
      <aside
        className={`newsletter-banner${isOpen ? " open" : ""}`}
        aria-label="Newsletter signup"
      >
        <span className="newsletter-banner__cta">{ctaText}</span>
        <p className="newsletter-banner__desc">{description}</p>

        {submitted ? (
          <p className="newsletter-banner__success" style={{ marginLeft: "auto" }}>
            Thanks — you're in!
          </p>
        ) : (
          <div className="newsletter-banner__form">
            <input
              type="email"
              className="newsletter-banner__input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit(e)}
            />
            <button
              className="newsletter-banner__submit"
              onClick={onSubmit}
            >
              Sign Up
            </button>
          </div>
        )}

        <button
          className="newsletter-banner__close"
          onClick={onClose}
          aria-label="Dismiss newsletter signup"
        >
          ×
        </button>
      </aside>
    </>
  );
}
