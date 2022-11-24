import { Journey, Comparisons } from './types'

const isValidWalk = (arrDirections: Journey) : boolean => {

	if(!Array.isArray(arrDirections) || arrDirections.length !== 10) return false

	const objComparisonTable: Comparisons = { n:0, s:0, e:0, w:0 } 

	for (let index = 0; index < arrDirections.length; index++) {
		if(typeof objComparisonTable[arrDirections[index]] === 'undefined') return false
		objComparisonTable[arrDirections[index]] +=1
	}

	if(objComparisonTable['n'] !== objComparisonTable['s'] || objComparisonTable['w'] !== objComparisonTable['e']) return false

	return true
}

export { isValidWalk }