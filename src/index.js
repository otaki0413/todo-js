import "./styles.css";

const onClickAdd = () => {
  // 入力したTODOの値を取得して、フォーム値の初期化
  const inputText = document.getElementById("add-text").value; // input要素に入力された値 = value
  document.getElementById("add-text").value = "";
  // 未完了のTODOに要素を追加する
  createIncompleteList(inputText);
};

// ==============================
// 未完了リストから指定の要素を削除する関数
// ==============================
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
// =============================
// 未完了リストに指定の要素を追加する関数
// =============================
const createIncompleteList = (value) => {
  // div生成(タスクとボタン2個が子要素)
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成（TODOを埋め込む要素）
  const li = document.createElement("li");
  li.innerText = value;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  console.log("aaa");
  // -----------------
  // 完了ボタン押下時の処理
  // -----------------
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // 親ノードのdiv以下を初期化(完了ボタンと削除ボタンは不要)
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // ------------------
    // 戻すボタン押下時の処理
    // ------------------
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);

      // テキスト取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストにTODOを移動
    document.getElementById("completed-list").appendChild(addTarget);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストにTODOを追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 追加ボタンを押下時の処理
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
