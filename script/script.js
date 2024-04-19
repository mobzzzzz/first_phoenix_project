// import {
//   firestoreDB,
//   Timestamp,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   deleteDoc,
//   updateDoc,
// } from "./script/config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getFirestore,
  Timestamp,
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

console.log("test");

const firebaseConfig = {
  apiKey: "AIzaSyDz4wh7z369v-whnyYeWaI3quPab2hxFmA",
  authDomain: "phoenix-first-project.firebaseapp.com",
  projectId: "phoenix-first-project",
  storageBucket: "phoenix-first-project.appspot.com",
  messagingSenderId: "943608506043",
  appId: "1:943608506043:web:c6dc699ceedf5090406b9e",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firebaseApp);

const OBJECTIVE_COLLECTION_NAME = "objective"
const GUEST_BOOK_COLLECTION_NAME = "guestbook"

const date = new Date();
const months = String(date.getMonth() + 1).padStart(2, "0");
const dates = String(date.getDate()).padStart(2, "0");
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
const time = `${date.getFullYear()}-${months}-${dates}-${hours}-${minutes}-${seconds}`;

///manager///
let indexManager = { objective: 0, guestbook: 0 };
///manager//

///buttton Event///
$("#landing-todo-content-write-button").click(async function () {
  await setEvent("objective", "#landing-todo-content-write-input");
});

$("#landing-post-write-content-button").click(async function () {
  await setEvent(
    "guestbook",
    "#landing-post-write-content",
    "#landing-post-write-nickname"
  );
});

async function setEvent(collectionID, contentID, nicknameID = "false") {
  let nickname = $(nicknameID).val();
  let content = $(contentID).val();

  // 비어있는 칸 인식
  if ((nicknameID != "false" && nickname == "") || content == "") {
    alert("비어있는 값이 있으면 안됩니다!");
    console.log(nickname, content);
  } else {
    let docs;

    if (collectionID == "objective") {
      docs = {
        index: ++indexManager[collectionID],
        content: content,
      };
      alert("항해를 시작합니다");
    } else if (collectionID == "guestbook") {
      let writemonth = date.getMonth() + 1;
      let writedate = date.getDate();
      let writehours = date.getHours();
      let writeminutes = date.getMinutes();

      docs = {
        nickname: nickname,
        content: content,
        writemonth: writemonth,
        writedate: writedate,
        writehours: writehours,
        writeminutes: writeminutes,
        index: ++indexManager[collectionID],
      };

      console.log(docs["index"]);
      alert("펄럭 펄럭");
    }
    await setDoc(doc(firestoreDB, collectionID, time), docs);

    getEvent(collectionID, )
  }
}
///buttton Event///

///load Event///
await getEvent(OBJECTIVE_COLLECTION_NAME);
await getEvent(GUEST_BOOK_COLLECTION_NAME);

async function getEvent (collectionID) {
  let dataBase = await getDocs(collection(firestoreDB, collectionID));
  let prev = 0;

  if (collectionID == OBJECTIVE_COLLECTION_NAME) {
    $("#landing-todo-content-list").html("");
  } else if (collectionID == GUEST_BOOK_COLLECTION_NAME) {
    $("#landing-post-read").html("");
  }

  dataBase.forEach((docs) => {
    indexManager[collectionID] = Math.max(
      prev,
      parseInt(docs.data()["index"], 10)
    );
    prev = indexManager[collectionID];

    let docid = docs.id;
    let content = docs.data()["content"];
    let temp_html;

    if (content != null && content != "") {
      if (collectionID == OBJECTIVE_COLLECTION_NAME) {
        temp_html = `<div id="landing-todo-read-content">
            <div class="landing-todo-content-list-item-box">
                <span class="landing-todo-content-list-item"><i class="fa-solid fa-sailboat"></i> ${content} </span>
            </div>
            <div class="landing-todo-content-list-item-box">
                <button id="landing-todo-content-list-item-update-button" type="button"
                    class="btn btn-info landing-todo-content-list-item-buttons"><i class="fas fa-diamond-turn-right"></i> 경로 수정 <span style ="display:none">${docid}</span><span style ="display:none">${collectionID}</span></button>
                <button id="landing-todo-content-list-item-delete-button" type="button"
                    class="btn btn-danger landing-todo-content-list-item-buttons"><i class="fas fa-anchor"></i>항해 종료 <span style ="display:none">${docid}</span></button>
            </div>
        </div>`;

        $("#landing-todo-content-list").append(temp_html);
      } else if (collectionID == GUEST_BOOK_COLLECTION_NAME) {
        let nickname = docs.data()["nickname"];
        let writemonth = docs.data()["writemonth"];
        let writedate = docs.data()["writedate"];
        let writehours = docs.data()["writehours"];
        let writeminutes = docs.data()["writeminutes"];

        temp_html = ` <div id="landing-post-read-main">
            <div><i id="landing-post-read-icon-bird" class="fa-solid fa-dove"></i></div>
            <div id="landing-post-read-box">
                <div id="landing-post-read-nickname">@${nickname} <span
                        id="landing-post-read-write-date">${writemonth}월${writedate}일${writehours}시${writeminutes}분</span>
                </div>
                <div id="landing-post-read-content">
                    <div>
                        <span id="landing-post-read-content-text">${content}</span>
                    </div>
                    
                    <div>
                        <button id="landing-todo-content-list-item-update-button" type="button"
                        class="btn btn-success landing-post-read-content-update-buttons"><i class="fas fa-plane-departure"></i></i> 내용 수정<span style ="display:none">${docid}</span><span style ="display:none">${collectionID}</span></button>
                        <button id="landing-post-read-content-button" type="button" class="btn btn-danger"> <i class="fas fa-arrow-rotate-left"></i> 새
                            복귀요청<span style ="display:none">${docid}</span></button>
                    </div>
                </div>
            </div>
        </div>`;

        $("#landing-post-read").append(temp_html);
      }
    }
  });
}
///load Event///

//항해 목표 데이터베이스 값 삭제하기
$(document).on(
  "click",
  "#landing-todo-content-list-item-delete-button",
  async function (delevent) {
    let deldocid = delevent.target.children["1"].innerHTML;
    await deleteDoc(doc(firestoreDB, "objective", deldocid));
    alert("해당 항해를 종료합니다");
    
    getEvent(OBJECTIVE_COLLECTION_NAME);
  }
);

//댓글 데이터베이스 값 삭제하기
$(document).on(
  "click",
  "#landing-post-read-content-button",
  async function (delevent) {
    let deldocid = delevent.target.children["1"].innerHTML;
    console.log(delevent, deldocid);
    await deleteDoc(doc(firestoreDB, "guestbook", deldocid));
    alert("(새를 부르는 휘파람 소리)");
    
    getEvent(GUEST_BOOK_COLLECTION_NAME);
  }
);

// 내용 업데이트 (어디든 쓰일 수 있게)
$(document).on(
  "click",
  "#landing-todo-content-list-item-update-button",
  async function (updatebuttonevent) {
    console.dir(updatebuttonevent.target);
    $("#landing-modal-box").css("display", "inline");
    $(document).on(
      "click",
      "#landing-modal-inner-button-yes",
      async function () {
        let updatecid = updatebuttonevent.target.children[1].innerHTML;
        let collctionname =
          updatebuttonevent.target.children[2].innerHTML;
        await updateDoc(doc(firestoreDB, collctionname, updatecid), {
          content: $("#landing-modal-inner-input").val(),
        });
        alert("해당 정보를 수정합니다");
        getEvent(collctionname)
        $("#landing-modal-box").css("display", "none");
      }
    );
    $(document).on(
      "click",
      "#landing-modal-inner-button-no",
      async function () {
        $("#landing-modal-box").css("display", "none");
      }
    );
  }
);