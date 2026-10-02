navigate = function(pageName) {
    document.getElementById('home').style.animation="flyout 1s ease-in-out forwards";
    setTimeout(function () {
        window.location.href = pageName;
    }, 1000);
}