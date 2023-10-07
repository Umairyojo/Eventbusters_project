// Get all elements with class "img-text"
const imageTexts = document.querySelectorAll('.img-text');

// Get modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close');


// Add click event listener to each image text
imageTexts.forEach((imageText) => {
    imageText.addEventListener('click', () => {
        // Get image source and title from the clicked element
        const img = imageText.querySelector('img');
        const txtraw = imageText.querySelector('h1');
        const txt = txtraw.textContent;
        const imgSrc = img.src;
        const imgAlt = txt;

        // Set modal image source and title
        modalImage.src = imgSrc;
        modalCaption.textContent = imgAlt;

        // Display the modal
        modal.style.display = 'block';
    });
});

// Close the modal when the "x" button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// ------------------------------------------------------------------------------------------




