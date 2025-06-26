const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    const sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    // Typing effect for role
    const roles = ["Front-End Developer", "UI/UX Designer", "Programmer"];
    let roleIndex = 0;
    let charIndex = 0;
    const roleElement = document.getElementById("role");

    function typeRole() {
        if (charIndex < roles[roleIndex].length) {
            roleElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 150);
        } else {
            setTimeout(eraseRole, 2000);
        }
    }

    function eraseRole() {
        if (charIndex > 0) {
            roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseRole, 100);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        }
    }

    typeRole();