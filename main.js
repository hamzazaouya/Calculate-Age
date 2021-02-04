/*global document*/

function calcAge() {

    'use strict';
    var day = document.getElementById('day').value,
        month = document.getElementById('month').value,
        year = document.getElementById('year').value,
        nowDate = new Date(),
        userDate = new Date(),
        userDateMs,
        nowDateMs,
        ageInMs,
        ageInDays;
    if (day > 0 && month > 0 && year > 0) {
        userDate.setFullYear(year);
        userDate.setMonth(month);
        userDate.setDate(day);
        userDateMs = userDate.getTime();
        nowDateMs = nowDate.getTime();
        ageInMs = nowDateMs - userDateMs;
        ageInDays = ageInMs / 86400000;
        document.getElementById('result').innerHTML = ageInDays;
    }
}

document.getElementById('submit').onclick = function () {
    'use strict';
    calcAge();
};
