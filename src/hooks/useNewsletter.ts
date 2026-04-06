import { useState, useEffect } from "react";
import {isValidEmail} from "../utils/isValidEmail.ts";
import * as React from "react";

/**
 * Manages newsletter banner state.
 * Auto-shows after `delayMs` milliseconds on mount.
 *
 * @param {number} [delayMs=3000]
 */
const useNewsletter = (delayMs: number = 3000) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  const open  = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const submit = (e?: React.SyntheticEvent<HTMLElement>) => {
    e?.preventDefault();
    if (!isValidEmail(email)) return;
    // Wire up your actual subscription endpoint here
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setTimeout(close, 1500);
  };

  return { isOpen, open, close, email, setEmail, submitted, submit };
};
export default useNewsletter;
