module.exports = function toReadable(number) {
    let first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

    let second = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let quest = (number % 10 === 0) ? '' : ' ' + first[number % 10];

    if (number < 20) {
        return first[number];
    } else if (number < 100) {
        return second[Math.floor(number / 10) - 2] + quest;

    } else if (number >= 100 && number < 110 || number >= 200 && number < 210 || number >= 300 && number < 310 || number >= 400 && number < 410 || number >= 500 && number < 510 || number >= 600 && number < 610 || number >= 700 && number < 710 || number >= 800 && number < 810 || number >= 900 && number < 910) {
        return first[Math.floor(number / 100)] + ' ' + 'hundred' + quest;

    } else if (number >= 110 && number < 120 || number >= 210 && number < 220 || number >= 310 && number < 320 || number >= 410 && number < 420 || number >= 510 && number < 520 || number >= 610 && number < 620 || number >= 710 && number < 720 || number >= 810 && number < 820 || number >= 910 && number < 920) {
        return first[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + first[Math.floor(number % 100)];

    } else if (number < 1000) {
        return first[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + second[Math.floor(number % 100 / 10 - 2)] + quest;
    }
}
