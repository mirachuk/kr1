let button = document.querySelector('.button');
function transliterate(text) {
    const translitMap = {
        'А': 'A',
        'Б': 'B',
        'В': 'V',
        'Г': 'G',
        'Д': 'D',
        'Е': 'E',
        'Ё': 'YO',
        'Ж': 'ZH',
        'З': 'Z',
        'И': 'I',
        'Й': 'Y',
        'К': 'K',
        'Л': 'L',
        'М': 'M',
        'Н': 'N',
        'О': 'O',
        'П': 'P',
        'Р': 'R',
        'С': 'S',
        'Т': 'T',
        'У': 'U',
        'Ф': 'F',
        'Х': 'KH',
        'Ц': 'TS',
        'Ч': 'CH',
        'Ш': 'SH',
        'Щ': 'SHCH',
        'Ъ': '',
        'Ы': 'Y',
        'Ь': '',
        'Э': 'E',
        'Ю': 'YU',
        'Я': 'YA',
    };
    return text.split('').map(char => translitMap[char] || char).join('');
}
function convertToLatin() {
    const elements = document.querySelectorAll('.hfamilia, .hname, .hfname, .hborn, .hpborn1, .hpborn2');
    elements.forEach(element => {
        element.innerText = transliterate(element.innerText);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    button.addEventListener('click', convertToLatin);
});