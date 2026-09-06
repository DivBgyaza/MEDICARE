export default function Icon({ name }) {
  const paths = {
    quality: <><path d="m12 3 7 3v5c0 4.6-2.8 8.1-7 10-4.2-1.9-7-5.4-7-10V6l7-3Z"/><path d="m9 12 2 2 4-5"/></>,
    comfort: <><path d="M5 16c4-1 5-5 7-9 2 4 3 8 7 9"/><path d="M4 18c4 2 12 2 16 0"/></>,
    people: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M15 15c4 0 6 2 6 5"/></>,
    confidence: <><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="m8 12 3 3 5-6"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  }
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.quality}</svg>
}
