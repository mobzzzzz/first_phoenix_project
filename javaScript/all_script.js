// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// import { getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDz4wh7z369v-whnyYeWaI3quPab2hxFmA",
//     authDomain: "phoenix-first-project.firebaseapp.com",
//     projectId: "phoenix-first-project",
//     storageBucket: "phoenix-first-project.appspot.com",
//     messagingSenderId: "943608506043",
//     appId: "1:943608506043:web:c6dc699ceedf5090406b9e"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // 동작하기 시작

// // 목표 저장하기
// $("#button1").click(async function () {
//     let text = $('#goalText').val()
//     if (text == "") {
//         // console.log("비어있음")
//         alert("목표를 입력해주세요!");
//     } else {
//         let doc = { "content": text };
//         await addDoc(collection(db, "minsu-objective"), doc);
//         window.location.reload(); // 화면을 다시 불러와서 남아있는거 없애기
//     }
// })

// // 목표 가져오기
// let docs_goal = await getDocs(collection(db, "minsu-objective"));
// docs_goal.forEach(element => {
//     let rows = element.data();
//     console.log(rows["content"])
//     let addText = `
//     <li>${rows["content"]}</li>
//     `;
//     $('#postinglist').append(addText)
// });

// // 토글 
// $("#guestButton").click(async function () {
//     console.log("열자")
//     $(`#postingGuest`).toggle();
//     $(`#addGuest`).toggle();
//     $(`#guestSubject`).toggle();
//     if ($(`#postingGuest`).css("display") == "none") {
//         $(`#guestButton`).text("방명록 열기")
//     } else {
//         $(`#guestButton`).text("방명록 닫기")
//     }
// })

// // 방명록 저장하기
// $("#guestAdd").click(async function () {
//     let idInput = $('#nicknameInput').val()
//     let commentInput = $('#commentInput').val()

//     // 날짜 및 시간
//     let today = new Date();
//     let year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate();
//     let hours = today.getHours(); // 시
//     let minutes = today.getMinutes();  // 분
//     let seconds = today.getSeconds();  // 초

//     let doc = {
//         "idInput": idInput,
//         "commentInput": commentInput,
//         "year": year,
//         "month": month,
//         "day": day,
//         "hours": hours,
//         "minutes": minutes,
//         "seconds": seconds
//     };
//     await addDoc(collection(db, "minsu-guestbook"), doc);
//     window.location.reload(); // 화면을 다시 불러와서 남아있는거 없애기

//     // 디버깅
//     // console.log("작동함")
//     // alert("목표 저장 완료");

// })

// // 방명록 가져오기
// let docs_guest = await getDocs(collection(db, "minsu-guestbook"));
// docs_guest.forEach(element => {
//     let rows = element.data();
//     console.log(rows["idInput"])
//     let addText = `
// <div class="commentList">
// <p id="nicknameRead">${rows["idInput"]}</p>
// <p id="contentRead">${rows["commentInput"]}</p>
// <p id="timeRead">${rows["year"]}-${rows["month"]}-${rows["day"]} ${rows["hours"]}:${rows["minutes"]}:${rows["seconds"]}</p>
// </div>
// `;
//     $('#postingGuest').append(addText)
// });
// // 동작하기 끝


// 잠시 테스트하기
export function hello(){
    console.log("안녕하세요");
}