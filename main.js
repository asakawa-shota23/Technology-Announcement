window.onload = () => {
     //画像リストの定義
    let photoList = [
        { src: "img/premia.jpg", title:"【名手レジェンド武豊J × ディープの子ワールドプレミア】"},
        { src: "img/Reideoro.jpg", title:"【最多勝騎手C.ルメール × ダービー馬レイデオロ】"},
        { src: "img/chaketora.jpg", title:"【牝馬の福永祐一J × シャケトラ】"},
        { src: "img/mickyqoeen.jpg", title:"【小倉のスター浜中俊J × ミッキークイーン】"}
    ];
    let photoLength = photoList.length;
    console.log(photoList);

    // 要素の取得
    const purpose = document.getElementById("purpose");
    const contenttext = document.getElementById("contenttext");
    const photo = document.getElementById("photo");
    const backBtn =document.getElementById("backBtn")
    const nextBtn = document.getElementById("nextBtn");
    const title = document.getElementById("title");
    const explanation = document.getElementById("explanation");
    const secondtext = document.getElementById("secondtext");
    const start = document.getElementById("start");
    console.log(purpose);
    console.log(contenttext);
    console.log(photo);
    console.log(title);
    console.log(backBtn);
    console.log(nextBtn);
    console.log(explanation);
    console.log(secondtext);
    console.log(start);

    // p要素（purpose）に文字列を追加
    purpose.innerHTML = "第一言語取得のためにJavascriptの基礎を固めていきたい。<br>プロゲート等で何度かJavascriptについての勉強は行っているが実際にコードを書いてみる機会が少なく力がまだまだついていない。<br>一人でもっと活動範囲を広げていくために少しずつ出来ることを増やしていく。"
    console.log(explanation.innerHTML);
    
    // p要素（contenttext）に文字列の追加
    contenttext.innerHTML = "参考書（ノンプログラマのためのJavascript）を参考にJSの基礎をやっていきました。<br>期間が決まっている中で参考書に記載してあることはひと通りやってみてその中で工夫を加えてできることはないかと思い挑戦しました。<br>まだまだ覚えることが多く、何もできていないですがまずは<strong>エラーを恐れず</strong>たくさんのコードを書いていきます。"
    console.log(explanation.innerHTML);

    // p要素(explanation)に文字列の追加
    explanation.innerHTML = "画像は全部で4枚あります。<br>「NEXT」をクリックすると一枚画像がす進み、「BACK」をクリックすると画像が一枚戻ります。<br>今回は自分自身が元々好きな競馬の写真を御覧ください。";
    console.log(explanation.innerHTML);

    //h4要素に文字列の追加
    secondtext.innerHTML = "Google検索を使用しながら簡易スライドショーを作ってみた。<br>今回は簡単に昔の写真を使用しスライドショーを作成。<br>自動的に流れる設定ではなく、開始ボタンを作成しクリックすることでスライドショーが始まるように設定した。"
    console.log(secondtext);

    // img要素をHTMLに追加
    let item, img;
    for(let i = 0; i < photoLength; i++) {
        item = photoList[i];
        // img要素の作成
        img = document.createElement("img");
        // 作成したimg要素に属性を追加
        img.src = item.src;
        img.alt = item.title;
        // 作成したimg要素をHTMLに追加
        photo.appendChild(img);
        //作成したimg要素を保存
        item.elem = img;
    }
    //現在のインデックスを保存するための変数
    let currentIndex = 0;

    // Backボタンを押したときの処理
    backBtn.onclick = () => {
        console.log("clicked");
        // 表示する画像のインデックスを計算
        currentIndex--;
        if (currentIndex === photoLength) {
            currentIndex = 0;
        }
        //画像の切り替え
        showphoto(currentIndex);
    };

    // nextボタンを押したときの処理
    nextBtn.onclick = () => {
        console.log("clicked");
        // 表示する画像のインデックスを計算
        currentIndex++;
        if (currentIndex === photoLength) {
            currentIndex = 0;
        }
        //画像の切り替え
        showphoto(currentIndex);
    };

        // 指定の画像に切り替える関数
    function showphoto(index) {

        // すべての画像を非表示
        for (let i = 0; i < photoLength; i++) {
            photoList[i].elem.style.display = "none";
        }
        // 表示する対象の要素を取得
        let targetPhoto = photoList[index];

        // タイトルの表示
        let viewNumber = index + 1;
        title.innerHTML = "["+ viewNumber +"]" + targetPhoto.title;

        // 画像の表示
        targetPhoto.elem.style.display = "inline";
    }
     // タイトル初期表示
    title.innerHTML = "[1]" + photoList[0].title;

     // 画像の初期表示のためにshowphoto関数を実行する
    showphoto(currentIndex);

    // 開始ボタン、インターバルの設定
    start.onclick = () => {
    console.log(start);
    setInterval(slideshow_timer, 3000);
    }
};


// スライドショーの作成,画像の定義
const imgs_src = ["img/daigakusai.jpg", "img/hittihaiku.jpg", "img/kyoto.jpg", "img/nisinosann.jpg", "img/zemi.jpg"];
let num = -1;


// スライドショーが入れ替わる処理
function slideshow_timer() {
    if (num === 4) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById("myimg").src = imgs_src[num];
}