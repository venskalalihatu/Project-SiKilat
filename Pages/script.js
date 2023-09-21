const accordions = document.querySelectorAll('.accordion');
      
accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');
  const content = accordion.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      accordions.forEach(item => {
        item.querySelector('.accordion-content').style.display = 'none';
      });
      content.style.display = 'block';
    }
  });
});


function myFunction() {
    var x = document.querySelector(".nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }