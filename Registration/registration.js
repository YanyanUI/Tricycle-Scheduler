// Target the DOM elements
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const imageInput2by2 = document.getElementById('2by2');
const imagePreview2by2 = document.getElementById('imagePreview2by2');

// Listen for a file selection change
imageInput.addEventListener('change', function(event) {
    // Get the first selected file
    const file = event.target.files[0];
    
    if (file) {
        // Generate a temporary local URL for the file
        const objectURL = URL.createObjectURL(file);
        
        // Assign the URL to the image element
        imagePreview.src = objectURL;
        
        // Make the image visible
        imagePreview.style.display = 'block';
        imagePreview.style.width = '100%'
        imagePreview.style.height = 'auto';
        imagePreview.style.overflow = 'auto';
    }
});
imageInput2by2.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if(file){
        const objectURL = URL.createObjectURL(file);

        imagePreview2by2.src = objectURL;

        imagePreview2by2.style.display = 'block';
        imagePreview2by2.style.width = '100%'
        imagePreview2by2.style.height = 'auto';
        imagePreview2by2.style.overflow = 'auto';

    }
})

const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile-only");

menu.addEventListener('click', () => {
    navMenu.classList.toggle("menu-show");
})
