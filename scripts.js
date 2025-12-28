document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const sendButton = document.getElementById('send-whatsapp');
  const form = document.getElementById('contact-form');
  if (sendButton && form) {
    sendButton.addEventListener('click', () => {
      const name = (document.getElementById('contact-name')?.value || '').trim();
      const company = (document.getElementById('contact-company')?.value || '').trim();
      const phone = (document.getElementById('contact-phone')?.value || '').trim();
      const message = (document.getElementById('contact-message')?.value || '').trim();

      const details = [
        name ? `Halo King Toys, saya ${name}.` : 'Halo King Toys, saya ingin mendapatkan informasi lebih lanjut.',
        company ? `Perusahaan/Toko: ${company}` : '',
        phone ? `Kontak: ${phone}` : '',
        message ? `Kebutuhan: ${message}` : ''
      ]
        .filter(Boolean)
        .join('\n');

      const waNumber = '6281280700629';
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(details)}`;
      window.open(waUrl, '_blank');
      form.reset();
    });
  }
});
