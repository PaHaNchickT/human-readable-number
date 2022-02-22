module.exports = function toReadable(number) {
    let temp = String(number).split('')
    switch (temp.length) {
        case 1:
            return(`${easyNumbers(temp[0])}`)
        case 2:
            if (temp[0] === '1') {
                return(`${tenToNineteen(temp[1])}`)
            } else if(temp[0] !== '1' && temp[1] === '0') {
                return(`${tenty(temp[0])}`)
            } else {
                return(`${tenty(temp[0])} ${easyNumbers(temp[1])}`)
            }
        case 3:
            if (temp[1] === '0' && temp[2] === '0') {
                return(`${easyNumbers(temp[0])} hundred`)
            } else if (temp [1] === '0' && temp[2] !== '0') {
                return (`${easyNumbers(temp[0])} hundred ${easyNumbers(temp[2])}`)
            } else if (temp[1] !== '0' && temp[2] === '0') {
                return(`${easyNumbers(temp[0])} hundred ${tenty(temp[1])}`)
            } else if (temp[2] !== '0' && temp[1] === '1') {
                return (`${easyNumbers(temp[0])} hundred ${tenToNineteen(temp[2])}`)
            } else {
                return(`${easyNumbers(temp[0])} hundred ${tenty(temp[1])} ${easyNumbers(temp[2])}`)
            }
    }
}
// toReadable(906)

function easyNumbers(num) {
    switch (num) {
        case '0':
            return ('zero')
                ;
        case '1':
            return ('one')
        case '2':
            return ('two')
                ;
        case '3':
            return ('three')
                ;
        case '4':
            return ('four')
                ;
        case '5':
            return ('five')
                ;
        case '6':
            return ('six')
                ;
        case '7':
            return ('seven')
                ;
        case '8':
            return ('eight')
                ;
        case '9':
            return ('nine')
                ;
    }
}

function tenToNineteen(num) {
    switch (num) {
        case '0':
            return ('ten')
                ;
        case '1':
            return ('eleven')
                ;
        case '2':
            return ('twelve')
                ;
        case '3':
            return ('thirteen')
                ;
        case '4':
            return ('fourteen')
                ;
        case '5':
            return ('fifteen')
                ;
        case '6':
            return ('sixteen')
                ;
        case '7':
            return ('seventeen')
                ;
        case '8':
            return ('eighteen')
                ;
        case '9':
            return ('nineteen')
                ;
    }
}

function tenty(num) {
    switch (num) {
        case '1':
            return ('ten')
        case '2':
            return ('twenty')
                ;
        case '3':
            return ('thirty')
                ;
        case '4':
            return ('forty')
                ;
        case '5':
            return ('fifty')
                ;
        case '6':
            return ('sixty')
                ;
        case '7':
            return ('seventy')
                ;
        case '8':
            return ('eighty')
                ;
        case "9":
            return ('ninety')
                ;
    }
}