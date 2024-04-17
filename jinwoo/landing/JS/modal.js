// 아이콘 누르면 모달창 띄우기
$("#bottom-right-tmi-warning-icon").click(function(){
    $("#tmi-modal-box").css("display","inline")
});

// 모달창에서 no 버튼 누를 시 모달 사라지기
$("#tmi-modal-inner-button-no").click(function(){
    $("#tmi-modal-box").css("display","none")
});

// 모달창에서 yes 버튼 누를 시 TMI창 나오고,모달 사라지기
$("#tmi-modal-inner-button-yes").click(function(){
    $("#tmi-modal-box").css("display","none")
    $("#tmi-user-component").css("display","inline")
});

