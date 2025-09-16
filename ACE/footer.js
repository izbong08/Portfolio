let blackLinks = document.querySelectorAll('.familysite a.black');
let whiteLinks = document.querySelectorAll('.familysite a.white');
let whiteList = document.querySelector('.white_list');

blackLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    whiteList.style.display = 'block';
  });
});

whiteLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    whiteList.style.display = 'none';
  });
});