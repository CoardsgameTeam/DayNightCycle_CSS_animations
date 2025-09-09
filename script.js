// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
   // Get the buttons
   const sunButton = document.getElementById('sun');
   const moonButton = document.getElementById('moon');

   // Generate stars dynamically
   const starsContainer = document.querySelector('.stars');
   const totalStars = 250; // nombre d'étoiles
   for (let i = 0; i < totalStars; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      starsContainer.appendChild(star);
   }

   // Start animation
   sunButton.addEventListener('click', function () {
      document.body.classList.add('animation-started');

      setTimeout(() => {
         console.log('Sunset animation started!');
      }, 100);
   });

   // Reset animation
   moonButton.addEventListener('click', function () {
      document.body.classList.add('animation-reverse');
      document.body.classList.remove('animation-started');

      setTimeout(() => {
         document.body.classList.remove('animation-reverse');
         console.log('Sunrise animation completed!');
      }, 4000);
   });
});
