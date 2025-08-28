export const TextCapitalize = (text) => {
    if (typeof text !== "string") return "";

  const parts = text.split('.');

  const capitalized = parts.map(part => {
    const trimmed = part.trim();
    if (!trimmed) return "";

    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  });

  return capitalized
    .map((part, index) => (index < parts.length - 1 ? part + ". " : part))
    .join("");
};
