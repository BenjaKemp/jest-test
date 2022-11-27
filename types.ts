type Directions = ('n' | 's' | 'e' | 'w');

type Journey = Directions[];

type Comparisons =  Record<Directions, number>

export { Journey, Comparisons }
