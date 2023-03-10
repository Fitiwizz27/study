"use strict";


/**
 * Creates a day.
 * @param {*} dayName name of the day
 * @param {*} id unique identificator for element
 */
function createDay(dayName, id) {
    let createSection = document.createElement(`section`);

    let section = week.appendChild(createSection);
    section.classList.add(`weekDay`);
    section.setAttribute(`id`, id);

    let createName = document.createElement(`p`);
    let name = section.appendChild(createName);
    name.innerHTML = dayName.trim().toUpperCase();
    name.classList.add(`dayName`);

    let createList = document.createElement(`ul`);
    let ul = section.appendChild(createList);
    ul.classList.add(`subjectNumber`);
    ul.classList.add(`hidden`);

    let createURLs = document.createElement(`ul`);
    let URLs = section.appendChild(createURLs);
    URLs.classList.add(`links`);
    URLs.classList.add(`hidden`);

    name.addEventListener(`click`, () => {
        let shedule = ul.classList;

        if (shedule.contains(`hidden`)) {
            shedule.remove(`hidden`);

            // name.style.writingMode = 'vertical-rl';
            // name.style.transform = `rotate(180deg)`;
            // name.style.borderLeft = `solid 3px hsl(240, 93%, 65%)`;
            // name.style.borderBottom = `none`;
        } else {
            shedule.add(`hidden`);

            // name.style.writingMode = 'horizontal-tb';
            // name.style.transform = `rotate(0deg)`;
            // name.style.borderLeft = `none`;
            // name.style.borderBottom = `solid 3px hsl(240, 93%, 65%)`;
        }

    });
}


/**
 * Fills the day with rows.
 * @param {*} dayOfTheWeek day that fills
 */
function fillDay(dayOfTheWeek) {
    let numberOfSubjects = 7;
    let subjectNumber = dayOfTheWeek.querySelector('.subjectNumber');

    for (let count = 1; count <= numberOfSubjects; count++) {
        let subject = document.createElement(`li`);
        let number = document.createElement(`p`);

        subjectNumber.appendChild(subject);
        subject.appendChild(number);

        number.innerHTML = count;
    }
}


/**
 * Fills the day with subjects.
 * @param {*} dayOfTheWeek day that fills
 * @param {*} number subject number
 * @param  {...any} ...arr name of the subject
 * @param  {...any} ...arr  subject type
 * @param  {...any} ...arr audience
 */
function addSubject(dayOfTheWeek, number, ...arr) {
    let subjectNumber = dayOfTheWeek.querySelector(`.subjectNumber`);
    let children = subjectNumber.children;

    for (let element of arr) {
        let paragraph = document.createElement(`p`);

        children[number - 1].appendChild(paragraph).innerHTML = element.trim().toUpperCase();
    }
}


/**
 * Creates URls.
 * @param {*} dayOfTheWeek day that fills
 * @param  {...any} arr name of the URL
 * @param  {...any} arr link
 */
function createURLsFor(dayOfTheWeek, ...arr) {
    let URLs = dayOfTheWeek.querySelector(`.links`);

    for (let i = 0; i < arr.length; i += 2) {
        let createLi = document.createElement(`li`);
        let li = URLs.appendChild(createLi);

        let createLink = document.createElement(`a`);
        let link = li.appendChild(createLink);
        link.innerHTML = arr[i];
        link.href = arr[i + 1];
    }
}


/**
 * Shows hidden shedule.
 */
function showShedule() {
    let shedule = document.querySelectorAll(`.dayName`);
    let myElement = document.querySelectorAll(`.subjectNumber`);
}

let myYear = new Date().getFullYear();
let myMonth = new Date().getMonth();
let myToday = new Date(myYear, myMonth, 0).getTime();
let myNow = new Date().getTime();
let myWeek = Math.round((myNow - myToday) / (1000 * 60 * 60 * 24 * 7));

let weekEven;
myWeek % 2 ? weekEven = 1 : weekEven = 0;
console.log(weekEven);

let numberOfGroup = 0;

do {
    numberOfGroup = parseInt(window.prompt(`Номер группы (1 или 2):`, 1), 10);
} while (isNaN(numberOfGroup) || numberOfGroup > 2 || numberOfGroup < 1);

console.log(`Group ${numberOfGroup}`);

if (weekEven == 1) {
    if (numberOfGroup == 1) {
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 3, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        addSubject(monday, 4, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);
        fillDay(tuesday);
        addSubject(tuesday, 4, `Физическая культура`, `ПЗ`, `С/З`);
        createURLsFor(tuesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 3, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        addSubject(wednesday, 4, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        addSubject(wednesday, 5, `Сети и телекоммуникации`, `ЛР`, `316А`);
        addSubject(wednesday, 6, `Сети и телекоммуникации`, `ЛР`, `316А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);

        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 3, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 4, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 5, `Сети и телекоммуникации`, `ЛК`, `209А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    } else {
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 1, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        addSubject(monday, 2, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        addSubject(monday, 3, `Сети и телекоммуникации`, `ЛР`, `316А`);
        addSubject(monday, 4, `Сети и телекоммуникации`, `ЛР`, `316А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);
        fillDay(tuesday);
        addSubject(tuesday, 4, `Физическая культура`, `ПЗ`, `С/З`);
        createURLsFor(tuesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 3, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        addSubject(wednesday, 4, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);

        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 3, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 4, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 5, `Сети и телекоммуникации`, `ЛК`, `209А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    }
} else {
    if (numberOfGroup == 1) {
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 3, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        addSubject(monday, 4, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);
        fillDay(tuesday);
        addSubject(tuesday, 4, `Физическая культура`, `ПЗ`, `С/З`);
        createURLsFor(tuesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 3, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        addSubject(wednesday, 4, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        addSubject(wednesday, 5, `Сети и телекоммуникации`, `ЛР`, `316А`);
        addSubject(wednesday, 6, `Сети и телекоммуникации`, `ЛР`, `316А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);
        fillDay(thursday);
        addSubject(thursday, 3, `Цифровая обработка сигналов`, `ЛР`, `219А`);
        addSubject(thursday, 4, `Цифровая обработка сигналов`, `ЛР`, `219А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 3, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 4, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 5, `Сети и телекоммуникации`, `ЛК`, `209А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    } else {
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 1, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        addSubject(monday, 2, `Проектирование вычислительных систем`, `ЛР`, `21А`);
        addSubject(monday, 3, `Сети и телекоммуникации`, `ЛР`, `316А`);
        addSubject(monday, 4, `Сети и телекоммуникации`, `ЛР`, `316А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);
        fillDay(tuesday);
        addSubject(tuesday, 4, `Физическая культура`, `ПЗ`, `С/З`);
        createURLsFor(tuesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 3, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        addSubject(wednesday, 4, `Проектирование вычислительных систем`, `ЛК`, `302А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);
        fillDay(thursday);
        addSubject(thursday, 1, `Цифровая обработка сигналов`, `ЛР`, `219А`);
        addSubject(thursday, 2, `Цифровая обработка сигналов`, `ЛР`, `219А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 3, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 4, `Цифровая обработка сигналов`, `ЛК`, `309А`);
        addSubject(friday, 5, `Сети и телекоммуникации`, `ЛК`, `209А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    }
}