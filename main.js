document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const bonusCheckbox = document.getElementById('bonus-checkbox');
    const resultsContainer = document.getElementById('results-container');
    const footerInfo = document.getElementById('footer-info');

    const getBallColor = (number) => {
        if (number <= 10) return 'var(--color-yellow)';
        if (number <= 20) return 'var(--color-blue)';
        if (number <= 30) return 'var(--color-red)';
        if (number <= 40) return 'var(--color-gray)';
        return 'var(--color-green)';
    };

    const generateLottoSet = (includeBonus) => {
        const numbers = new Set();
        while (numbers.size < (includeBonus ? 7 : 6)) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        if (includeBonus) {
            const bonusNumber = sortedNumbers.pop();
            return { mainNumbers: sortedNumbers, bonusNumber };
        } else {
            return { mainNumbers: sortedNumbers, bonusNumber: null };
        }
    };

    const createGameCard = (gameIndex, lottoSet) => {
        const card = document.createElement('div');
        card.className = 'game-card';

        const header = document.createElement('div');
        header.className = 'game-card-header';
        header.innerHTML = `<span>게임 ${gameIndex}</span> ${lottoSet.bonusNumber ? '<span>행운번호 포함</span>' : ''}`;
        
        const numbersDiv = document.createElement('div');
        numbersDiv.className = 'game-numbers';

        lottoSet.mainNumbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'lotto-ball';
            ball.textContent = num;
            ball.style.backgroundColor = getBallColor(num);
            numbersDiv.appendChild(ball);
        });

        if (lottoSet.bonusNumber) {
            const plusIcon = document.createElement('span');
            plusIcon.className = 'plus-icon';
            plusIcon.textContent = '+';
            numbersDiv.appendChild(plusIcon);

            const bonusBall = document.createElement('div');
            bonusBall.className = 'lotto-ball';
            bonusBall.textContent = lottoSet.bonusNumber;
            bonusBall.style.backgroundColor = 'var(--color-purple)';
            numbersDiv.appendChild(bonusBall);
        }
        
        card.appendChild(header);
        card.appendChild(numbersDiv);
        return card;
    };

    generateBtn.addEventListener('click', () => {
        resultsContainer.innerHTML = '';
        const includeBonus = bonusCheckbox.checked;

        for (let i = 1; i <= 5; i++) {
            const lottoSet = generateLottoSet(includeBonus);
            const gameCard = createGameCard(i, lottoSet);
            resultsContainer.appendChild(gameCard);
        }

        copyBtn.style.display = 'inline-block';
        footerInfo.style.display = 'block';
        
        const now = new Date();
        const timestamp = `${now.getFullYear()}. ${now.getMonth() + 1}. ${now.getDate()}. ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;
        footerInfo.querySelector('p').textContent = `추천 완료! (${timestamp}) / 총 5게임`;
    });

    copyBtn.addEventListener('click', () => {
        let copyText = '';
        const gameCards = resultsContainer.querySelectorAll('.game-card');

        gameCards.forEach((card, index) => {
            const numbers = [];
            card.querySelectorAll('.lotto-ball').forEach(ball => {
                numbers.push(ball.textContent);
            });
            
            copyText += `게임 ${index + 1}: `;
            if(numbers.length > 6) {
                 copyText += `${numbers.slice(0, 6).join(', ')} + ${numbers[6]}\n`;
            } else {
                 copyText += `${numbers.join(', ')}\n`;
            }
        });

        navigator.clipboard.writeText(copyText).then(() => {
            copyBtn.textContent = '복사 완료!';
            setTimeout(() => {
                copyBtn.textContent = '전체 복사';
            }, 2000);
        });
    });
});