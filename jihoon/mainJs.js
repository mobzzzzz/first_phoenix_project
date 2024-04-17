let resizeTimer; // 타이머를 저장할 변수
window.addEventListener('resize', function () {
  // 이미 예약된 타이머가 있다면 취소.
  clearTimeout(resizeTimer);
  // 사용자가 리사이즈를 멈춘 후 250ms 후에 새로고침.
  resizeTimer = setTimeout(function () {
    if(window,innerWidth < 550)
    {
        
    }
  }, 250);
});