import  {type RefObject} from "react";
import * as React from "react";
import '../styles/searchoverlay.css';

interface SearchOverlayProp {
  isOpen: boolean,
  onClose: () => void,
  query: string,
  onChange: (val: string) => void,
  onSubmit: (e?: React.SyntheticEvent<HTMLElement>) => void,
  inputRef: RefObject<HTMLInputElement>,
}

/**
 * Full-screen search overlay.
 *
 * @param {{
 *   isOpen: boolean,
 *   onClose: () => void,
 *   query: string,
 *   onChange: (val: string) => void,
 *   onSubmit: (e?: Event) => void,
 *   inputRef: React.RefObject,
 * }} props
 */
export default function SearchOverlay({
  isOpen,
  onClose,
  query,
  onChange,
  onSubmit,
  inputRef,
}: SearchOverlayProp) {
  return (
    <>
      <div
        className={`search-overlay${isOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div className="search-overlay__inner">
          <input
            ref={inputRef}
            type="text"
            className="search-overlay__input"
            placeholder="Search"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSubmit(e)}
          />
          <button
            className="search-overlay__close"
            onClick={onClose}
            aria-label="Close search"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}
