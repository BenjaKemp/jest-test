const isValidWalk = require('./journey');
const journies = require('./journies.json')

describe(' isValidWalk will return true if the walk the app gives you will take you exactly ten minutes and will return you to HQ ',() => {

    test('will fail if the directions passed take too long', () => {

        const { tooLong } = journies
    
       const testTooLong =  isValidWalk(tooLong)

        expect(testTooLong).toBe(false);
     
    });

    test('will fail if the directions passed are too short', () => {

        const { tooShort } = journies
    
        const testTooShort =  isValidWalk(tooShort)
 
         expect(testTooShort).toBe(false);
      
    });

    test('will fail in non array is passed', () => {

        const { nonArray } = journies
    
        const testNonArray =  isValidWalk(nonArray)
 
         expect(testNonArray).toBe(false);
      
    });

    test('will fail if incorrect directions are passed', () => {

        const { inCorrectLetters } = journies
    
        const testInCorrectLetters =  isValidWalk(inCorrectLetters)
 
         expect(testInCorrectLetters).toBe(false);
      
    });

    test('will pass traversing one dimension north and south', () => {

        const { oneDimensionVertical } = journies
    
        const testOneDimension =  isValidWalk(oneDimensionVertical)
 
         expect(testOneDimension).toBe(true);
      
    });

    test('will pass traversing one dimension east and west', () => {

        const { oneDimensionHorizontal } = journies
    
        const testOneDimension =  isValidWalk(oneDimensionHorizontal)
 
         expect(testOneDimension).toBe(true);
      
    });

    test('will pass traversing two dimensions', () => {

        const { twoDimension } = journies
    
        const testTwoDimension =  isValidWalk(twoDimension)
 
         expect(testTwoDimension).toBe(true);
      
    });
    

})
