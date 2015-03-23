function replace(str) {
    var newStr = [],
        alpha = 'abcdefghijklmnopqrstuvwxyz',
        vowels = 'aeiou';

    str = str.split('');

    for(var i = 0, l = alpha.length; i < l i++) {
        for(var j = 0, ln = str.length; j < ln; j++) {
            if(alpha[i] == str[j]) {
                newStr[j] = alpha[i+1];
            }
        }
    }
    return newStr;
}

console.log(replace("Fuck you asshole"));