import { useState, useEffect, useRef } from "react";
import * as React from "react";

/**
 * Manages search overlay state and input focus.
 */
const useSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery]   = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const open  = () => setIsOpen(true);
  const close = () => { setIsOpen(false); setQuery(""); };

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);


  const submit = (e?: React.SyntheticEvent<HTMLElement>) => {
    e?.preventDefault();
    if (!query.trim()) return;
    // Wire up your actual search handler here
    console.log("Search query:", query);
  };

  return { isOpen, open, close, query, setQuery, submit, inputRef };
};

export default useSearch;
