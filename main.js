window.onload = () => {
     //画像リストの定義
    let photoList = [
        { src: "img/premia.jpg", title:"【名手レジェンド武豊J × ディープの子ワールドプレミア】"},
        { src: "img/Reideoro.jpg", title:"【最多勝騎手C.ルメール × ダービー馬レイデオロ】"},
        { src: "img/chaketora.jpg", title:"【牝馬の福永祐一J × シャケトラ】"}
    ];
    let photoLength = photoList.length;
    console.log(photoList);
    // 要素の取得
    const photo = document.getElementById("photo");
    const nextBtn = document.getElementById("nextBtn");
    const title = document.getElementById("title");
    console.log(photo);
    console.log(title);
    console.log(nextBtn);
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
    };
