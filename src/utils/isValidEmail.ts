/**
 * Validates if a string is a correctly formatted email address.
 */
export const isValidEmail = (email: string): boolean => {
    if (!email) return false

    // A standard, widely-used regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // We use .trim() to prevent errors caused by accidental leading/trailing spaces
    return emailRegex.test(email.trim());
};