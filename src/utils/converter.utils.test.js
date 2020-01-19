import { ConverterUtil } from './Converter.utils';
import { ZERO, ONE, MIN, MAX, ONES, TENS, MULTIPLE_OF_TENS, POWER_OF_TENS } from '../constants/word.constant';

describe('Converter utils', () => {
    it('should return lakh value', ()=>{
        let number = "999999";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.word).toEqual("Nine lakh ninety nine thousand nine hundred ninety  nine");
    });
    it('should return thousand value', ()=>{
        let number = "99999";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.word).toEqual("Ninety nine thousand nine hundred ninety  nine");
    });
    it('should return hundred value', ()=>{
        let number = "100";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.word).toEqual("One hundred ");
    });
    it('should return twenty three', ()=>{
        let number = "23";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.word).toEqual("Twenty  three");
    });
    it('should return twelve', ()=>{
        let number = "12";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.word).toEqual("Twelve ");
    });
    it('should return five', ()=>{
        let number = "1";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.word).toEqual("One");
    });
    it('should return 09', ()=>{
        let number = "09";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.word).toEqual("Nine");
    });
    it('should return error', ()=>{
        let number = "999999999";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.error).toEqual("Invalid entry, Please try again.");
    });
    it('should return error', ()=>{
        let number = "";
        const result = ConverterUtil.getWordFromNumber(number);
        expect(result.error).toEqual("Invalid entry, Please try again.");
    });
});