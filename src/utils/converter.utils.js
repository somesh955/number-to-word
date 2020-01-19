import { ZERO, ONE, MIN, MAX, ONES, TENS, MULTIPLE_OF_TENS, POWER_OF_TENS } from '../constants/word.constant';

const checkForLakh = (number) => {
    if (number.charAt(0) === ZERO) return '';
    return `${ONES[number.charAt(0)]}`;
};

const checkForTenThousand = (number) => {
    if (number.charAt(0) === ZERO) return '';
    return checkForTens(number.slice(0, 2));
};

const checkForThousand = (number) => {
    if (number.charAt(1) === ZERO) return '';
    return checkForOnes(number.slice(0, 2));
};

const checkForHundred = (number) => {
    if (number.charAt(0) === ZERO) return '';
    return `${ONES[number.charAt(0)]}`;
};

const checkForTens = (number) => {
    if (number.charAt(0) === ZERO) return '';
    return (number.charAt(0) === ONE) ? `${TENS[number.charAt(1)]}` : `${MULTIPLE_OF_TENS[number.charAt(0)]} `;
};

const checkForOnes = (number) => {
    if (number.charAt(0) === ONE && number.charAt(0) !== ZERO) return '';
    return `${ONES[number.charAt(1) || 0]}`;
};

const convertedNumberInWord = (word) => ({
    word: convertToSentanceCase(word)
});

const convertToSentanceCase = (word) => (word.charAt(0).toUpperCase() + word.slice(1));


const getWordFromNumber = (number) => {

    // convert number to string with 6 digit length
    const strNumber = number.toString().padStart(6, '0');

    // check for edge cases of criteria, It should be between (1 to 999999)
    if (strNumber === MIN || strNumber > MAX) return ({ "error": "Invalid entry, Please try again." });

    // check for all digit and get the word
    let lakh = checkForLakh(strNumber);
    let thousand = checkForTenThousand(strNumber.slice(-5));
    thousand += checkForThousand(strNumber.slice(-5));
    let hundred = checkForHundred(strNumber.slice(-3));
    let tens = checkForTens(strNumber.slice(-2));
    let ones = checkForOnes(strNumber.slice(-2));

    // phrase the sentance will all the word
    let sentance = '';
    sentance += lakh && `${lakh} ${POWER_OF_TENS[2]} `;
    sentance += thousand && `${thousand} ${POWER_OF_TENS[1]} `;
    sentance += hundred && `${hundred} ${POWER_OF_TENS[0]} `;
    sentance += tens && `${tens} `;
    sentance += ones && `${ones}`;

    return convertedNumberInWord(sentance);
};

export const ConverterUtil = {
    getWordFromNumber
};