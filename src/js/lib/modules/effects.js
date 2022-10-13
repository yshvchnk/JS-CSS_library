import $ from '../core';

$.prototype.animateOverTime = function (dur, cb, fin) {
    // створюємо функцію, що буде запускатись до якоїсь умови(якщо умова не виконується - функція теж)
    let timeStart;
    function _animationOverTime(time) {
        if(!timeStart){
            timeStart = time;
        }
        // відслідковує прогрес анімації(time - збільшується, timeStart- стале)
        let timeElapsed = time - timeStart;
        // для відслідкування зміни прозорості (1-граничне значення)
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animationOverTime);
        } else {
            // запускаємо, якщо передана fin()
            if (typeof fin === 'function') {
                fin();
            }
        }
    }
    // повертаємо функцію, так як вона буде використана в інших методах, щоб тоді використати
    return _animationOverTime;
};

$.prototype.fadeIn = function (dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        // встановлюємо дісплей або переданий або за замовчуванням в блок
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }
    return this;
};

$.prototype.fadeOut = function (dur, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                // приховуємо елемент, якщо вім прозорий
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }
    return this;
};

$.prototype.fadeToggle = function (dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            // встановлюємо дісплей або переданий або за замовчуванням в блок
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };

            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        } else {
            for (let i = 0; i < this.length; i++) {

            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    // приховуємо елемент, якщо вім прозорий
                    this[i].style.display = 'none';
                }
            };

            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
            }
        }
    }
    return this;
};