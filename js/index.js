document.querySelector('.menu-btn').onclick = function () {
    if(document.querySelector('.menu-content').classList.contains('active')) {
        document.querySelector('.menu-content').classList.toggle('activeAfter')
        setTimeout(() => {
            document.querySelector('.menu-content').classList.toggle('active')
        }, 500)
    } else {
        document.querySelector('.menu-content').classList.toggle('active')
        setTimeout(() => {
            document.querySelector('.menu-content').classList.toggle('activeAfter')
        }, 450)
    }
}