////////////////////////////////////////////////////////////////////////////
//동적화면비 관련 기능//
///////////////////
let resizeTimer; // 타이머를 저장할 변수
window.addEventListener('resize', function () {
  // 이미 예약된 타이머가 있다면 취소.
  clearTimeout(resizeTimer);
  // 사용자가 리사이즈를 멈춘 후 250ms 후에 새로고침.
  resizeTimer = setTimeout(function () {
    window.location.reload();
  }, 250);
});
////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
//현재 슬라이드 백업 기능//
/////////////////////
function getItem(key) {//새로고침시 임시JSON에 index값 받아옴
  const value = sessionStorage.getItem(key);
  if (key === 'index') return value === null ? 0 : JSON.parse(value);
}

function setItem(key, value) {//버튼클릭 시에 임시JSON에 값 저장
  if (value === null || value === undefined) return;
  const toJson = JSON.stringify(value);
  sessionStorage.setItem(key, toJson);
}
////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
//div사이즈 동적으로 세팅하는 기능//
////////////////////////////
const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = getItem('index'); // 현재 슬라이드 화면 인덱스

if (window.innerHeight < 550) {//화면크기에 따른 버튼 크기 재할당
  document.getElementById('btnlist').style.top = '10px';
  document.getElementById('btnL').style.fontSize = '20px';
  document.getElementById('btnR').style.fontSize = '20px';
}

let width = outer.clientWidth;
inners.forEach((inner) => {
  inner.style.width = `${width}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${width * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기
innerList.style.marginLeft = `-${width * currentIndex}px`;//저장된 슬라이드 index로 초가화
////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
//버튼 이벤트 관련 기능//
////////////////////
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? inners.length - 1 : currentIndex; // index값이 0보다 작아질 경우 마지막으로 이동
  setItem('index', currentIndex);//알맞게 조정된 현재 슬라이드index를 임시 JSON에 저장
  innerList.style.marginLeft = `-${width * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

buttonRight.addEventListener('click', () => {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? 0 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 처음으로 이동
  setItem('index', currentIndex);//알맞게 조정된 현재 슬라이드index를 임시 JSON에 저장
  innerList.style.marginLeft = `-${width * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});
////////////////////////////////////////////////////////////////////////////