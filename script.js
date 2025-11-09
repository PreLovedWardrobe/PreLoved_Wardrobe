document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle && toggle.addEventListener('click', ()=>{
  if(nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
});

// Basic "Create Listing" client-side demo (no backend)
const sellForm = document.getElementById('sell-form');
if(sellForm){
  sellForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(sellForm);
    const title = fd.get('title') || 'Untitled';
    const price = fd.get('price') || '0';
    alert('Listing created (demo): ' + title + ' — ₹' + price + '\nThis is a front-end prototype. Connect to a backend to save listings.');
    sellForm.reset();
  });
}

// Contact form demo
const contact = document.querySelector('.contact-form');
contact && contact.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thanks! Message sent (demo). We will reply to your email.');
  contact.reset();
});
