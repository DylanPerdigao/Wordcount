function countWords() {
    let charactersCount = 0;
    let wordsCount = 0;
    let newlineCount = 0;
    const text = document.getElementById('input').value;
    let paragraphs = text.split('\n');
    let words = [];
    paragraphs.forEach(paragraph => {
        words = words.concat(paragraph.split(' '));
    });
    words = words.filter(word => word !== '');
    wordsCount = words.length;
    charactersCount = text.split('').length;
    newlineCount = text.split('\n').length - 1;
    //document.getElementById('debug').innerHTML = words;
    document.getElementById('resultCharacters').innerHTML = charactersCount;
    document.getElementById('resultWords').innerHTML = wordsCount;
    document.getElementById('resultNewlines').innerHTML = newlineCount;
}