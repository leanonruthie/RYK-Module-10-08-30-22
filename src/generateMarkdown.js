// Work Reference #1 - 28-Stu_Mini-project/Main/index.js
// Work Reference #2 - 01-Activities/24-Stu_Subclasses
// Work Reference #3 - https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// Work Reference #4 - My Homework - Readme Generator
// Work reference #5 - My Brilliant Study Buddies/Tutors


function renderTeamRoster(employees) {
    let employeesArray = [];
    let eachEmployee = ""
    for (let i = 0; i < employees.length; i++) {
        eachEmployee = eachEmployee + employeesArray[i];
    }
    if (eachEmployee.role == "Manager") {
        return `<ul id="Managers">
                <li class="name"> ${managers.getName()}</li>
                <li class="role"><img src="../dist/assets/icons/project-management-timeline-icon.png"> ${manager.getRole()}</li>
                <li class="id">ID: ${manager.getId()}</li>
                <li class="email">Email: <a href="mailto:${manager.getEmail()}"></a></li>
                <li class="office">Office: ${manager.getOffice()}</li>
            </ul>`
    } else if (eachEmployee.role == "Engineer") {
        return `<ul id="Engineers">
                <li class="name"> ${engineer.getName()}</li>
                <li class="role"><img src="../dist/assets/icons/web-development-icon.png"> ${engineer.getRole()}</li>
                <li class="id">ID: ${engineer.getId()}</li>
                <li class="email">Email: <a href="mailto:${engineer.getEmail()}"></a></li>
                <li class="office">GitHub: <a href = "https://github.com/${engineer.getGithub()}" target="blank"></a></li>
            </ul>`
    } else if (eachEmployee.role == "Intern") {
        return `<ul id="Interns">
                <li class="name"> ${intern.getName()}</li>
                <li class="role"><img src="../dist/assets/icons/e-learning-icon.png"> ${intern.getRole()}</li>
                <li class="id">ID: ${intern.getId()}</li>
                <li class="email">Email: <a href="mailto:${intern.getEmail()}"></a></li>
                <li class="office">School: ${intern.getSchool()}</li>
            </ul>`
    }
}
function generateMarkdown(employees) {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <link rel="stylesheet" href="./assets/css/style.css">
                <title>Team Roster</title>
            </head>

            <body>
                    <h1>Meet Our Department's Valuable Employees!</h1>
                    ${renderTeamRoster(employees)}
            </body>
            </html>`;
}

module.exports = generateMarkdown;
