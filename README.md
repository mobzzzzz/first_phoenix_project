first_phoenix_project
===
 내일배움캠프 불사조 미니프로젝트

 > 기록을 위해 사용되지 않는 레거시 파일의 삭제가 이루어지지 않은 점 양해부탁드립니다.

 Guide
 ===
본 Repository의 `Main` branch에서 `Clone` 또는 `Fork` 해서 진행 가능합니다.
 
 Secrets를 제거하는 과정에서 정상적인 실행을 위해 `script/config.js` 의 작성이 필요합니다.

 ```javascript
 // script/config.js

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, Timestamp, collection, doc, getDocs, setDoc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "{your-api-key}}",
    authDomain: "{your-domain}}",
    projectId: "{your-project-id}}",
    storageBucket: "{your-storage-bucket}}",
    messagingSenderId: "{your-sender-id}}",
    appId: "{your-app-id}}",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firebaseApp);

export { firebaseApp, firestoreDB, Timestamp, collection, doc, setDoc, getDocs, deleteDoc, updateDoc };
 ```


===

