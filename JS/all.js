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


// スクロールすると、pagetopボタンのフェードイン、フェードアウト
document.addEventListener("DOMContentLoaded", function(){
    // 変数名scrollButtonにclass名(.scroll)を一致させる↓
    var scrollButton = document.querySelector('.scroll');

    //スクロールイベントを投入
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            //スクロール量が指定より以上場合、visibleクラスを追加
            scrollButton.classList.add('visible');
        } else {
            //スクロール量が指定より以下だった場合、visibleクラスを削除
            scrollButton.classList.remove('visible');
        }
    });
});

//スライドショー/矢印移動
$(document).ready(function () {
    $('.slider').slick({
      autoplay: true, // 自動再生
      infinite: true, // 無限ループ
      speed: 400, // スライドのスピード
      slidesToShow: 3, // 表示するスライド数
      slidesToScroll: 1, // スクロールするスライド数
      prevArrow: '<div class="slick-prev"></div>', // 左矢印
      nextArrow: '<div class="slick-next"></div>', // 右矢印
      centerMode: true, // 中央揃え
      variableWidth: true, // 画像の幅を可変に
      dots: true, // ドットナビゲーション
    });
  });

  //メニューボタントーグル
$(document).ready(function () {
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $("nav").toggleClass('active');
    });

    $("#removeActiveButton").click(function () {
        $(".openbtn").removeClass('active');
        $("nav").removeClass('active');
    });
});

// lightbox 画像拡大
function zoomImage(img) {
    img.classList.toggle("zoomed"); // クリックされた画像の拡大状態を切り替える
  }
  
  // Lightboxのオプション設定
  lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
  })
  
  document.addEventListener("lightbox:opened", function() {
    setTimeout(function() {
        let imageContainer = document.querySelector(".lb-outerContainer");
        if (imageContainer) {
            imageContainer.style.position = "fixed";
            imageContainer.style.top = "50%";
            imageContainer.style.left = "50%";
            imageContainer.style.transform = "translate(-50%, -50%)";
        }
    }, 100);
});
