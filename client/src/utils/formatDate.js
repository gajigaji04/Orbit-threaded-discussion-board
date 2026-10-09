// ISO 날짜 문자열을 "2026.10.08 12:30" 형식(로컬 시간)으로 표시
const pad = (n) => String(n).padStart(2, "0");

export function formatDate(value) {
  const date = new Date(value);
  if (!value || Number.isNaN(date.getTime())) return value ?? "";

  return (
    `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}`
  );
}
