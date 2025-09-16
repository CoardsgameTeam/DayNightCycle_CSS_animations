// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
   // Get the buttons
   const sunButton = document.getElementById('sun');
   const moonButton = document.getElementById('moon');

   // Start animation
   sunButton.addEventListener('click', function () {
      document.body.classList.remove('animation-reverse');
      document.body.classList.add('animation-started');

      setTimeout(() => {
         console.log('Sunset animation started!');
      }, 100);
   });

   // Reset animation
   moonButton.addEventListener('click', function () {
      document.body.classList.remove('animation-started');
      document.body.classList.add('animation-reverse');
   });
});
