function promissToggle() {
    $('#studyToggle').toggle();
    let display = $('#studyToggle').css("display")
    if (display == "none") {
        $('#studyButton').text("약속 보기")
    } else {
        $('#studyButton').text("약속 숨기기")
    }
}

function goalToggle() {
    $('#goalDiv').toggle();
}

function mbtiBtn(){
    $('#mbtiImg').toggle();
}