(() => {
  const input = document.querySelector('#domain-input');
  const preview = document.querySelector('[data-domain-preview]');
  const form = document.querySelector('[data-domain-form]');

  const formatDomain = (value) => {
    const clean = String(value || '')
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0]
      .replace(/[^a-z0-9.-]/g, '');
    if (!clean) return 'my-ai-project.com';
    return clean.includes('.') ? clean : `${clean}.com`;
  };

  input?.addEventListener('input', () => {
    preview.textContent = formatDomain(input.value);
  });

  form?.addEventListener('submit', (event) => {
    const domain = formatDomain(input.value);
    if (!input.value.trim()) {
      event.preventDefault();
      input.focus();
      input.setAttribute('aria-invalid', 'true');
      input.placeholder = '先輸入你的專案名稱';
      return;
    }
    input.value = domain;
    input.removeAttribute('aria-invalid');
  });

})();
