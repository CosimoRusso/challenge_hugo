// Complexity: O(n), where n is the number of chars in the word.
function firstMostRepeated(word){
    if (word.length === 0) return -1
    const dict = {}
    // loop through all the letters (O(N)) and count in an Object how many times each letter occurs.
    // since adding and retrieving by key in object takes O(1), the complexity is O(N)
    for (let i=0; i<word.length; i++){
        let w = word[i].toLowerCase();
        if (w in dict){
            dict[w]['occurrences'] += 1;
        }else{
            dict[w] = {occurrences: 1, position: i};
        }
    }
    let max = 0
    let maxLetter = null
    let position = -1
    // Loop through all the letters in the Object (worst case: 24, the letters in the alphabet -> O(1))
    // the if statement controls if we have a new maximum (or the same maximum but with position of first occurrence
    // lower) and saves information related to it (O(1), accessing to object by key). Complexity: O(1)
    for (let letter of Object.keys(dict)){
        if (dict[letter]['occurrences'] > max || (dict[letter]['occurrences'] === max && dict[letter][position] < position)){
            maxLetter = letter
            max = dict[letter]['occurrences']
            position = dict[letter]['position']
        }
    }
    return position
}

function test(){
    const words = ['Ahora', '', 'Color', 'Rotor', 'Corral']
    const results = [0, -1, 1, 0, 2]
    for (let i=0; i<words.length; i++){
        output = firstMostRepeated(words[i]);
        if (output !== results[i]){
            throw `ERROR: word ${words[i]} expected ${results[i]} but got ${output} instead`;
        }
    }
    console.log("No errors");
}

test()