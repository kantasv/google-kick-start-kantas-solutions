var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});



var expect = 'T'
//console.log(('T expected')

var T, N;
var Hs = [];
var caseCount = 1;

var output = '';



rl.on('line', function (line) {
    if (expect === 'T') {
        T = parseInt(line);
        expect = 'N';
        //console.log(('N expected')

    } else if (expect === 'N' && caseCount <= T) {
        N = parseInt(line);
        expect = "Hs";
        //console.log(('Hs expected')

    } else if (expect === 'Hs') {
        Hs = createNumbersArrayFromLine(line);
        //console.log((`T:${T},N:${N},Hs:${Hs}`);

        //calculate peaks here every Nth round
        output += getStringOfEachTestCaseResult(caseCount, computeNumOfPeaks(Hs))


        //counts coz this one case has been input
        caseCount++


        //if input is not enough
        if (caseCount <= T) {
            expect = 'N';
            //console.log(('N expected')

            //reset variables for the next Nth input.
            N = 0;
            Hs = [];

        } else {
            //if already got all of necesarry integers
            expect = 'none'
            //console.log(('already got all of necesarry integers')
            console.log(output)
        }


    }
})



function computeNumOfPeaks(Hs) {
    var Ps = []
    //console.log('computeNumOfPeaks is now being executed')
    for (var i = 0; i < Hs.length - 1; i++) {
        //console.log(`i=${i} started---`)

        if (i === 0 || i === Hs.length - 1) {
            //console.log('Exception i=' + i + '\n')
        } else {

            //console.log(isPeak(Hs, i))
            if (isPeak(Hs, i)) {
                Ps.push(Hs[i])
            }


        }

        //console.log(`i=${i} finished---`)

    }
    return Ps.length
}



function getStringOfEachTestCaseResult(TestCase, numOfPeaks) {
    return `Case #${TestCase}: ${numOfPeaks}\n`
}



function isPeak(Hs, i) {
    return (Hs[i] > Hs[i + 1]) && (Hs[i] > Hs[i - 1])
}



function createNumbersArrayFromLine(line) {
    splitedNumbers = line.split(' ');
    var splitedNumbers_copy = []
    for (var i = 0; i < splitedNumbers.length; i++) {
        splitedNumbers_copy.push(parseInt(splitedNumbers[i]))
    }
    return splitedNumbers_copy
}