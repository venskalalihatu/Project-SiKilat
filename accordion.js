document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');
  
      header.addEventListener('click', () => {
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          accordions.forEach(item => {
            item.querySelector('.accordion-content').style.maxHeight = null;
          });
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });
  