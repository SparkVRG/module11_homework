export function getPercents(percent, number) {
    if (isNumber(percent) && isNumber(number)) {
        return number / 100 * percent;
    }
    
    return 'Введены некорректные данные';
}

function isNumber(n) {
    if (typeof(n) == 'number' && !isNaN(n)) {
        return true;
    }

    return false;
}