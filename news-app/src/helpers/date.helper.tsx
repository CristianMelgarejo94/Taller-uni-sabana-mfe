export function getFormattedDates() {
  const today = new Date();
  const fiveDaysAgo = new Date();

  fiveDaysAgo.setDate(today.getDate() - 5);

  const todayFormatted = formatDate(today);
  const fiveDaysAgoFormatted = formatDate(fiveDaysAgo);

  return {
    today: todayFormatted,
    fiveDaysAgo: fiveDaysAgoFormatted
  };
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatISODate(isoString:any) {
  const date = new Date(isoString);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
  return date.toLocaleDateString('es-ES', options as any);
}