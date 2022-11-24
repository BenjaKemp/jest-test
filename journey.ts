import { Journey, Comparisons } from './types';

const isValidWalk = (arrDirections: Journey) : boolean => {

    if(!Array.isArray(arrDirections)) return false;
    
    if(arrDirections.length !== 10) return false;

    const objComparisonTable: Comparisons = arrDirections.reduce((acc, el) => {
        acc[el]+=1
        return acc
    },{ n:0, s:0, e:0, w:0 } as Comparisons)

    if(Object.keys(objComparisonTable).length !== 4) return false

    if(objComparisonTable['n'] !== objComparisonTable['s'] || objComparisonTable['w'] !== objComparisonTable['e']) return false

    return true;
  }
module.exports = isValidWalk;