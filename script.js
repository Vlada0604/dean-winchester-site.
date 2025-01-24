const funFactBtn = document.getElementById('funFactBtn');
const funFact = document.getElementById('funFact');

const facts = [
    'Дін обожнює класичний рок.',
    'Його улюблене авто — Chevrolet Impala 1967 року.',
    'Дін завжди має з собою дробовик і соляну кулю.',
    'Улюблена страва Діна — пиріг.',
];

funFactBtn.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    funFact.textContent = randomFact;
});
