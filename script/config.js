import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, Timestamp, collection, doc, getDocs, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDz4wh7z369v-whnyYeWaI3quPab2hxFmA",
    authDomain: "phoenix-first-project.firebaseapp.com",
    projectId: "phoenix-first-project",
    storageBucket: "phoenix-first-project.appspot.com",
    messagingSenderId: "943608506043",
    appId: "1:943608506043:web:c6dc699ceedf5090406b9e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firebaseApp);

// 모듈을 다른 모듈에서 사용할 수 있게 내보냄
// export, import를 쓰는 문법은 ES6 에서 추가된 방법이라 ESM(ECMA Script Module) 이라 부른다.
export { firebaseApp, firestoreDB, Timestamp, collection, doc, setDoc, getDocs, updateDoc };

