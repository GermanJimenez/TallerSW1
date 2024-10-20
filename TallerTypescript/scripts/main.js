import { dataCourses } from './dataCourses.js';
var coursesTbody = document.getElementById('courses');
var totalCreditElm = document.getElementById("total-Seassons");


renderCoursesInTable(dataCourses);

totalCreditElm.innerHTML = "" + getTotalSeassons(dataCourses);

function renderCoursesInTable(courses) {
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.id + "</td>" +"<td>" + course.name + "</td>\n                           <td>" + course.channel + "</td>\n                           <td>" + course.seassons + "</td>";
        coursesTbody.appendChild(trElement);
    });
}

function getTotalSeassons(courses) {
    var totalSeassons = 0;
    var totalShow = 0;
    courses.forEach(function (course) { return totalSeassons = totalSeassons + course.seassons,
        totalShow = totalShow + 1; });

    return totalSeassons/totalShow;
}