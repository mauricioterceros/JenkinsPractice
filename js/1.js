/* This is the file one. */

function Calculator()
{
    this.addition = function (numOne, numTwo)
    {
        return numOne + numTwo;
    }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Calculator;
}