// Toggle Menu for Mobile
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const menuToggle = document.querySelector('.menu-toggle');

  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active'); // Add or remove 'active' on hamburger
}


// Send Money Form Popup
const sendForm = document.getElementById('sendForm');
if (sendForm) {
    sendForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('popup').style.display = 'block';
        setTimeout(() => {
            document.getElementById('popup').style.display = 'none';
            sendForm.reset();
        }, 3000);
    });
}

// Currency Converter
const convertForm = document.getElementById('convertForm');
if (convertForm) {
    convertForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('amount').value);
        const currency = document.getElementById('currency').value;
        let rate;

        switch(currency) {
            case 'USD': rate = 15.50; break;
            case 'EUR': rate = 17.55; break;
            case 'GBP': rate = 20.40; break;
            case 'CAD': rate = 11.16; break;
            case 'AUD': rate = 9.50; break;
            case 'ZAR': rate = 0.70; break;
            case 'NGN': rate = 0.025; break;
            default: rate = 1;
        }

        const result = (amount / rate).toFixed(2);
        document.getElementById('result').innerText = `${amount} GHS = ${result} ${currency}`;
        convertForm.reset();
    });
}
