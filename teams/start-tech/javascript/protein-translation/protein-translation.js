//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sequence) => {
  let codons = sequence?.match(/.{1,3}/g) || []
  let proteins = []
  for(let codon of codons){
    if(!MAPPING[codon]) throw new Error('Invalid codon')
    if(MAPPING[codon] == 'STOP') break
    proteins.push(MAPPING[codon])
  }
  return proteins
};

const MAPPING = {
  'AUG'	: 'Methionine',
  'UUU' : 'Phenylalanine', 
  'UUC'	: 'Phenylalanine',
  'UUA' : 'Leucine', 
  'UUG'	: 'Leucine',
  'UCU' : 'Serine', 
  'UCC' : 'Serine', 
  'UCA' : 'Serine', 
  'UCG'	: 'Serine',
  'UAU' : 'Tyrosine', 
  'UAC'	: 'Tyrosine',
  'UGU' : 'Cysteine', 
  'UGC'	: 'Cysteine',
  'UGG'	: 'Tryptophan',
  'UAA' : 'STOP', 
  'UAG' : 'STOP', 
  'UGA'	: 'STOP'
}
