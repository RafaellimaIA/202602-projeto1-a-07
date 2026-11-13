// Preserve the exact source URL (including an in-page step/hash) when opening the assistant.
document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : event.target.parentElement;
  const link = target?.closest('a[href]');
  if (!link) return;

  const destination = new URL(link.href, window.location.href);
  if (!destination.pathname.endsWith('/US1.html')) return;

  event.preventDefault();
  destination.searchParams.set('return', window.location.href);
  window.location.assign(destination.href);
});
