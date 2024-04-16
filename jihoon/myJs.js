let resizeTimer; // 타이머를 저장할 변수
window.addEventListener('resize', function() {
  // 이미 예약된 타이머가 있다면 취소.
  clearTimeout(resizeTimer);

  // 사용자가 리사이즈를 멈춘 후 250ms 후에 새로고침.
  resizeTimer = setTimeout(function() {
    if(window.innerHeight<500)
    {
      document.getElementById('btn').style.fontSize='10px';
      print.console.log("asd");
    }
    window.location.reload();
  }, 250);
});
  

/*
  div사이즈 동적으로 구하기
*/
const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? inners.length-1 : currentIndex; // index값이 0보다 작아질 경우 마지막으로 이동
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

buttonRight.addEventListener('click', () => {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? 0 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 처음으로 이동
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});