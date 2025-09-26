export function hiLo() {

    const getRandomNumber = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const card = getRandomNumber(1, 11);
    const hiddenCard = getRandomNumber(1, 11);

    const result: 'higher' | 'lower' | 'equal' =
        hiddenCard > card ? 'higher'
            : hiddenCard < card ? 'lower'
                : 'equal';

    return { card, hiddenCard, result };
}