
const items = document.querySelectorAll('.leftmeuitems .items');

items.forEach((item) => {
  const hoverClass = `${item.classList[1]}-hover`; 
  const hoverDiv = document.querySelector(`.${hoverClass}`);

  if (hoverDiv) {
    item.addEventListener('mouseenter', () => {
      hoverDiv.style.display = 'block'; 
    });

    item.addEventListener('mouseleave', () => {
      hoverDiv.style.display = 'none';
    });
  }
});



const hamburger = document.querySelector('.hamburger');
const responsiveNavDropdown = document.querySelector('.responsiveNavDrropdown');
hamburger.addEventListener('click', () => {
  console.log("i got clikce")
  responsiveNavDropdown.style.display = responsiveNavDropdown.style.display === 'block' ? 'none' : 'block';

  hamburger.classList.toggle('open');
});
