/**
 * Converts Persian and Arabic numerals within a string to their Western/English (0-9) counterparts.
 * This is crucial for enabling case-insensitive and numeral-agnostic search functionality.
 *
 * @param {string} str - The input string containing mixed numerals.
 * @returns {string} The normalized string with all numerals converted to 0-9.
 */
export const normalizeNumerals = (str: string) => {
  if (!str) return '';

  // 1. Replace Farsi/Persian numerals (۰-۹)
  const farsiToEnglish = str.replace(/[۰-۹]/g, (d) =>
    String.fromCharCode(d.charCodeAt(0) - 1728)
  );

  // 2. Replace Arabic numerals (٠-٩)
  return farsiToEnglish.replace(/[٠-٩]/g, (d) =>
    String.fromCharCode(d.charCodeAt(0) - 1584)
  );
};