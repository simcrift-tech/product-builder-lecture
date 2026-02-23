document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.querySelector('.lotto-numbers');

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            numbersContainer.innerHTML = ''; // Clear previous numbers
            const numbers = new Set();

            while (numbers.size < 6) {
                const randomNumber = Math.floor(Math.random() * 45) + 1;
                numbers.add(randomNumber);
            }

            const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

            sortedNumbers.forEach((number, index) => {
                const numberElement = document.createElement('div');
                numberElement.classList.add('lotto-number');
                numberElement.textContent = number;

                if (index === sortedNumbers.length - 1) {
                    numberElement.classList.add('lucky-number');
                } else {
                    numberElement.style.backgroundColor = getRandomColor();
                }

                numbersContainer.appendChild(numberElement);
            });
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
