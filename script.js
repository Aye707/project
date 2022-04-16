function getForm1(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var birthday = document.getElementById('birthday').value;
    var number = document.getElementById('number').value;

    document.getElementById('getName').innerHTML =  "От " + name + " " + surname;
    document.getElementById('getNumber').innerHTML = "Номер телефона: " + number;
    document.getElementById('getAll').innerHTML = "Я " + name + " " + surname
        + " " + birthday + " года рождения прошу рассмотреть моё заявление на сотрудника МВД г. Нур-Султан";
}

function getForm2(){
    var name = document.getElementById('name2').value;
    var surname = document.getElementById('surname2').value;
    var nameTo = document.getElementById('nameTo').value;
    var surnameTo = document.getElementById('surnameTo').value;

    document.getElementById('appeal').innerHTML = "Кому: " + nameTo + " " + surnameTo;
    document.getElementById('from').innerHTML = "От: " + name + " " + surname;
    document.getElementById('from2').innerHTML = "От: " + name + " " + surname;

}