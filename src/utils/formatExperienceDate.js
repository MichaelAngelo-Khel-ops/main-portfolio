
export function formatExperienceDate(date) {
  if (!date) return "Present";

  const [year, month] = date.split("-").map(Number);

  const formattedDate = new Date(
    Date.UTC(year, month - 1, 1)
  );

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(formattedDate);
}

export function formatExperienceRange(startDate, endDate) {
  return `${formatExperienceDate(startDate)} - ${formatExperienceDate(endDate)}`;
}
