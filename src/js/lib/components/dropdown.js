import $ from '../core';

// запуск дропдаун
$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown();

// 2 варіант - генерування автоматично (можливо з сервера)
// $('.wrap').html(
//     `
//     <div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//             <a href="" class="dropdown-item">link1</a>
//             <a href="" class="dropdown-item">link2</a>
//             <a href="" class="dropdown-item">link3</a>
//         </div>
//     </div>`
// );

// $('.dropdown-toggle').dropdown();