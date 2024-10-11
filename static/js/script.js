document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const catImage = document.getElementById('catImage');

    generateBtn.addEventListener('click', async () => {
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';

        try {
            const response = await fetch('/get_cat');
            if (response.ok) {
                const imageUrl = await response.text();
                catImage.src = imageUrl;
                catImage.style.display = 'block';
            } else {
                throw new Error('Failed to fetch cat image');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to generate cat image. Please try again.');
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Cat 🐱';
        }
    });
});
