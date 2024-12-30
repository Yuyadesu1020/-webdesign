//HTML文書が読み込まれたときにこの機能が発動する
document.addEventListener("DOMContentLoaded", function () {
    //変数名にid名topを取得し、格納する
    var pagetopButton = document.getElementById("top");

    pagetopButton.addEventListener("click", function (event) {
        //元々の機能を停止する
        event.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


//一定スクロールすると、表示
window.addEventListener('scroll', function() {
    var fixedHeader = document.getElementById('fixed-header');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var triggerHeight = 400; // トリガーとなるスクロールの高さ（例として200px）

    if (scrollPosition > triggerHeight) {
        fixedHeader.classList.add('active');
    } else {
        fixedHeader.classList.remove('active');
    }
});