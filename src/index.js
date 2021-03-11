module.exports = function toReadable(number) {
    if (number == 0) return "zero";
    let readbl = new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ]);
    let good = "";
    let hundreds = Math.floor(number / 100);
    let dozens = Math.floor((number % 100) / 10);
    let units = number % 10;
    if (hundreds >= 1) good += readbl.get(hundreds) + " hundred";

    if (dozens >= 2) good += " " + readbl.get(dozens * 10);
    if (dozens == 1) good += " " + readbl.get(number % 100);
    else if (units > 0) {
        good += " " + readbl.get(units);
    }

    return good.trim();
};
