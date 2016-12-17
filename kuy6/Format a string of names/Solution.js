/**
 * Given: an array containing hashes of names

 Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

 Example:

 list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 // returns 'Bart, Lisa & Maggie'

 list([ {name: 'Bart'}, {name: 'Lisa'} ])
 // returns 'Bart & Lisa'

 list([ {name: 'Bart'} ])
 // returns 'Bart'

 list([])
 // returns ''
 Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 */
function list(names) {
    var result = [];

    if (names.length <= 2) {
        names.forEach(function (e) {
            result.push(e.name);
        });
        return result.join(' & ');
    }
    else {
        for (var i = 0, x = names.length - 1; i < x; i++) {
            result.push(names[i].name);
        }
        return result.join(', ').concat(' & ' + names[names.length - 1].name);
    }
}
