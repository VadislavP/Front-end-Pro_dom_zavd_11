function getLink() {
    const button1 = document.querySelector('.js--button1');
    const button2 = document.querySelector('.js--button2');
    button1.addEventListener('click', function () {
        const userLink = prompt("Введіть посилання:");
        if (userLink) {
            localStorage.setItem('userLink', userLink);
            alert("Посилання збережено!");
        } else {
            alert("Посилання не було введено.");
        }
    });

    button2.addEventListener('click', function () {
        let receivedLink = localStorage.getItem('userLink');
        if (receivedLink.startsWith('http') === false && receivedLink.startsWith('https') === false) {
            receivedLink = `https://${receivedLink}`;
        } if (receivedLink) {
            window.location.href = receivedLink;
        } else {
            alert("Посилання не було збережено. Введіть посилання за допомогою першої кнопки.");
        }
    });
}

function getNameButton() {
    const buttonContainer = document.querySelector('.two_exercise');
    const buttons = buttonContainer.querySelectorAll("button");
    console.log(buttons);

    function handClick(e) {
        alert("Клікнуто на " + e.target.textContent);
    }
    buttons.forEach(button => {
        button.addEventListener("click", handClick);
    });
}



document.addEventListener('DOMContentLoaded', function () {
    getLink();
    getNameButton();

})


