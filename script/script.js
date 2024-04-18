import {
  firebaseApp,
  firestoreDB,
  collection,
  addDoc,
  getDocs,
} from "/script/config.js";

var lastObjectiveIndex = 0;
var lastGuestBookIndex = 0;

$("#objective_add_button").click(async function () {
  let content = $("#objective_content_form").val();
  let date = Date();

  let doc = {
    index: lastObjectiveIndex + 1,
    status: "A",
    content: content,
    created_at: date,
  };

  await addDoc(collection(firestoreDB, "jaewon-objective"), doc);
  getObjective();
});

$("#guest_book_add_button").click(async function () {
  let nickname = $("#guest_book_nickname_form").val();
  let content = $("#guest_book_content_form").val();
  let date = Date();

  let doc = {
    index: lastGuestBookIndex + 1,
    content: content,
    nickname: nickname,
    created_at: date,
  };

  await addDoc(collection(firestoreDB, "jaewon-guestbook"), doc);
  getGuestBook();
});

getObjective();
getGuestBook();

async function getObjective() {
  let docs = await getDocs(collection(firestoreDB, "jaewon-objective"));

  //   container 내용을 전부 비우고 새로 담겠다는 꼼수인데, 퍼포먼스를 고려하면 전체를 업데이트하는 getObjective와 별개의 함수로 배열 분리등을 해서 현재 상태에서 update할 수 있으면 더욱 좋을 것
  $("#objective_row_container").html("");

  //   docs의 타입은 QuerySnapshot, .foreach로 순회는 가능하지만 map으로 변형하기 위해선 배열이 필요하기에 docs.docs로 배열로 사용 가능하다
  let sortedData = docs.docs
    .map((doc) => {
      return doc.data();
    })
    .toSorted((first, second) => {
      // 반환되는 값이 음수, 양수, 0인지를 구분함
      return first["index"] - second["index"];
    })
    .forEach((data) => {
    lastObjectiveIndex = data["index"];

    if (data["status"] != "A") return;

    let content = data["content"];
    let temp_html = `
    <dl class="row">
        <dd class="col-sm-11 border-start border-3 border-light">
            ${content}
        </dd>
        <dd class="col-sm-1">X</dd>
    </dl>
    `;

    $("#objective_row_container").append(temp_html);
  });
}

async function getGuestBook() {
  let docs = await getDocs(collection(firestoreDB, "jaewon-guestbook"));

  $("#guest_book_row_container").html("");

  let sortedData = docs.docs
    .map((doc) => {
      return doc.data();
    })
    .toSorted((first, second) => {
      // 반환되는 값이 음수, 양수, 0인지를 구분함
      return first["index"] - second["index"];
    })
    .forEach((data) => {
    lastGuestBookIndex = data["index"];

    let content = data["content"];
    let nickname = data["nickname"];
    let createdAt = data["created_at"];

    let temp_html = `<dd class="col-sm-12 border-start border-3 border-light guest_book_comment">${content} ${nickname} ${createdAt}</dd>`;

    $("#guest_book_row_container").append(temp_html);
  });
}
