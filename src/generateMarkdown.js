// Work reference #1 - My Homework - Weather Dashboard
// Work reference #2 - My Homework - Readme Generator

// This is the global html formatting function which will be tweaked with different parameters inside function Manager, function Engineer & function Intern
function renderEmployee(name, icon, role, id, email, office, github, school) {

    const ul = document.createElement("ul");
    ul.classList.add("Employees");
    const liName = document.createElement("li");
    const liIcon = document.createElement("img");
    const liRole = document.createElement("li");
    const liId = document.createElement("li");
    const liEmail = document.createElement("li");
    const liOffice = document.createElement("li");
    const liGithub = document.createElement("li");
    const liSchool = document.createElement("li");

    liName.innerText = "Name: " + name;
    liIcon.setAttribute("src", icon);
    liRole.innerText = "Role: " + role;
    liId.innerText = "Employee ID: " + id;
    liEmail.innerText = "Email: " + email;
    liOffice.innerText = "Office: " + office;
    liGithub.innerText = document.createElement("li");
    liSchool.innerText = document.createElement("li");

    ul.appendChild(name);
    ul.appendChild(role);
    ul.appendChild(id);
    ul.appendChild(email);
    ul.appendChild(office);
    ul.appendChild(github);
    ul.appendChild(school);

    return ul;
}

// Below are the tweaked functions with correct parameter

function renderManager(data) {
    for (i = 1; i < 6; i++) {
        var managerName = `${data.managerName}`;
        var managerID = `${data.managerID}`;
        var managerEmail = `${data.managerEmail}`;
        var managerOffice = `${data.office}`;
        var iconUrl = "./dist/assets/icons/project-management-timeline-icon.png";
        var role = "Manager"
        var github = "Wouldn't you like to know?"
        var school = "Wouldn't you like to know?"
        const x = renderEmployee(managerName, iconUrl, role, managerID, managerEmail, managerOffice, github, school);
        document.getElementById("Manager" + i).innerHTML = "";
        document.getElementById("Manager" + i).appendChild(x);
    }
}

function renderEngineer(data) {
    for (i = 1; i < 6; i++) {
        var engineerName = `${data.engineerName}`;
        var engineerID = `${data.engineerID}`;
        var engineerEmail = `${data.engineerEmail}`;
        var engineerGithub = `${data.github}`;
        var iconUrl = "./dist/assets/icons/web-development-icon.png";
        var role = "Engineer"
        var office = "Wouldn't you like to know?"
        var school = "Wouldn't you like to know?"
        const y = renderEmployee(engineerName, iconUrl, role, engineerID, engineerEmail, office, engineerGithub, school);
        document.getElementById("Manager" + i).innerHTML = "";
        document.getElementById("Manager" + i).appendChild(y);
    }
}

function renderIntern(data) {
    for (i = 1; i < 6; i++) {
        var internName = `${data.internName}`;
        var internID = `${data.internID}`;
        var internEmail = `${data.internEmail}`;
        var internSchool = `${data.school}`;
        var iconUrl = "./dist/assets/icons/project-management-timeline-icon.png";
        var role = "Intern"
        var office = "Wouldn't you like to know?"
        var github = "Wouldn't you like to know?"
        const z = renderEmployee(internName, iconUrl, role, internID, internEmail, office, github, internSchool);
        document.getElementById("Manager" + i).innerHTML = "";
        document.getElementById("Manager" + i).appendChild(z);
    }
}

function generateMarkdown(data) {
    if (data.choice == "Engineer") {
        renderManager(data);
        renderEngineer(data);
    } else if (data.choice == "Intern") {
      renderManager(data);
      renderIntern(data);
    }
    
return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Team Roster</title>
    </head>
    
    <body>
        <h1>Meet Our Department's Valuable Employees!</h1>
        <section class="Managers">
            <section id="Manager1">[TBD]
            </section>
            <img id="icon" src="" />
            <section id="Manager2">[TBD]
            </section>
            <section id="Manager3">[TBD]
            </section>
            <section id="Manager4">[TBD]
            </section>
            <section id="Manager5">[TBD]
            </section>
        </section>
        <section class="Engineers">
            <section id="Engineer1">[TBD]
            </section>
            <img id="icon" src="" />
            <section id="Engineer2">[TBD]
            </section>
            <section id="Engineer3">[TBD]
            </section>
            <section id="Engineer4">[TBD]
            </section>
            <section id="Engineer5">[TBD]
            </section>
        </section>
        <section class="Interns">
            <section id="Intern1">[TBD]
            </section>
            <img id="icon" src="" />
            <section id="Intern2">[TBD]
            </section>
            <section id="Intern3">[TBD]
            </section>
            <section id="Intern4">[TBD]
            </section>
            <section id="Intern5">[TBD]
            </section>
        </section>
    </body>
    </html>`;
}


module.exports = generateMarkdown;
