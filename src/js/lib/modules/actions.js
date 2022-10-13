import $ from '../core';

// отримання чи запис вністу html вузла
$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

// вибір елемента по індексу
$.prototype.eq = function (i) {
    const swap = this[i];
    // кількість властивостей, які будуть в нашому обєкті
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++){
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    // повертає обєкт, де буде один елемент і одна властивість
    return this;
};

// індекс елемента по порядку серед його сусілів\нащадків батьківського елемента
$.prototype.index = function () {
    const parent = this[0].parentNode;
    // html колекцію перетворюємо в масив за допомогою spread оператора
    const childs = [...parent.children];
    // повертає потрібний елемент, який відповідає елементу, на який ми клікнули
    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

// знайти елементи по селектору всередині вже знайдених
$.prototype.find = function (selector) {
    // загальна кількість елементів
    let numberOfItems = 0;
    // кулькість записаних елементів
    let counter = 0;
    // поверхнева копія обєкта - щоб попередити баги
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++){
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j <= arr.length; j++){
            // перезаписує елементи по номерам в обєкт
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }
    this.length = numberOfItems;
    // видалення звостика з елементів, які не були перезаписані
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function (selector) {
    let counter = 0;
    for (let i = 0; i < this.length; i++){
        this[i] = this[i].closest(selector);
        counter++;
    }
    // видаляє властивості, що не належать до closest
    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++){
        delete this[counter];
    }
    return this;
};

// отримує всі сусідні елементи, не включаючи сам елемент
$.prototype.siblings = function () {
    // загальна кількість елементів
    let numberOfItems = 0;
    // кулькість записаних елементів
    let counter = 0;
    // поверхнева копія обєкта - щоб попередити баги
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++){
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j <= arr.length; j++){
            // пропуск елемента, на якому була зроблена дія
            if (copyObj[i] === arr[j]) {
                continue;
            }
            // перезаписує елементи по номерам в обєкт
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length-1;
    }
    this.length = numberOfItems;
    // видалення звостика з елементів, які не були перезаписані
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems];
    }

    return this;
};
