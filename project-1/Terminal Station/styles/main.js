const toggleBtn = document.querySelector(".toggle-btn");
const toggleContent = document.querySelector(".toggle-content");

toggleBtn.addEventListener

document.querySelector('a[href="#section2"]').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default behavior of the link
    document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' }); // scroll to the element
  });

  document.querySelector('a[href="#section3"]').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default behavior of the link
    document.querySelector('#section3').scrollIntoView({ behavior: 'smooth' }); // scroll to the element

    element.scrollIntView(false);
  });

  