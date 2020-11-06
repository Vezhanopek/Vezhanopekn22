window.onload = function () {
    selectionQuote();
    selectionTitle();
    var hash = getDomainHash();
    selectionImage(hash);
    selectionPrice(hash);
    replacementUrl();
    selectionAlt();
};


// Выбор цитаты из текста

function selectionQuote() {
    try {
        var itog = document.getElementsByClassName("quote");
        var text = document.getElementsByClassName("main__p");
        var bufer = text[0].innerHTML;
        var index;
        var spaces = 0;

        for (var i = 0; i < bufer.length; i++) {
            if (bufer[i] == " " && spaces < 5) {
                index = i;
                spaces++;
            }
        }

        itog[0].innerHTML = bufer.slice(0, index);
    } catch (err) {}
}

// Меняем title

function selectionTitle() {
    document.title = location.hostname;
}


// Хэш домена

function getDomainHash() {
    var domain = document.domain;
    var hash = 0;

    for (var i = 0; i < domain.length; i++) {
        hash += domain[i].charCodeAt(0);
    }

    hash /= domain.length;
    hash %= 30;
    hash++;

    return parseInt(hash, 10);
}


// Выбор случайых картинок из папки

function selectionImage(hash) {
    var body = document.getElementsByTagName("body");
    var way = hash + ".jpg";
    body[0].style.backgroundImage = 'url('+way+')';
}

// Измениь alt у картинок

function selectionAlt() {

    try {
        var itog = document.getElementsByTagName("img");
        var text = document.getElementsByClassName("main__p");
        var bufer = text[0].innerHTML;
        var index;
        var spaces = 0;

        for (var i = 0; i < bufer.length; i++) {
            if (bufer[i] == " " && spaces < 1) {
                index = i;
                spaces++;
            }
        }

        itog[0].alt = bufer.slice(0, index);
    } catch (err) {}
}


// Рандомная цена

function selectionPrice(hash) {
    try {
        var bufer = document.getElementsByClassName("price");
        bufer[0].innerHTML = hash % 96 + 5 + "$";
    } catch (err) {}
}


/* Замена всех слов "домен" на url*/

function replacementUrl() {

    var domain = "support@" + document.domain;
    var text = document.getElementsByClassName("main__p");

    for(var i = 0; i < text.length; i++) {
        var bufer = text[i].innerHTML;
        text[i].innerHTML = bufer.replace(/домен/g, domain);
        var bufer = text[i].innerHTML;
        text[i].innerHTML = bufer.replace(/Домен/g, domain);
    }

}
