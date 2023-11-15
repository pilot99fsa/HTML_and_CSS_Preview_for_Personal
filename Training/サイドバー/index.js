// サイドバーの要素を取得
const menu = document.querySelector("#menu");

// サイドバーの表示/非表示を切り替えるためのボタン要素を取得
const menuBtns = document.querySelectorAll(".menu-btn"); // クラス名に.menu-btnがついている要素を全て取得

// サイドバーの表示と非表示を切り替えるためのイベントリスナーを設定する
menuBtns.forEach((button) => {
    button.addEventListener("click", function () {
        // サイドバーの表示状態を切り替えるクラス "visible" をトグルする(HTMLにはマークアップされていない、CSSファイルにて記述したクラス名を付け加える)
        menu.classList.toggle("visible");
    });
});

// ドキュメント全体に対してクリックイベントを追加
document.addEventListener("click", function (e) {
    // クリックされた要素がサイドバーおよびそのボタンのいずれにも含まれていない場合
    if (!menu.contains(e.target) && !menuBtns[0].contains(e.target)) {
        // サイドバーを非表示にする(visibleの名のついたクラス削除する)
        menu.classList.remove("visible");
    }
});