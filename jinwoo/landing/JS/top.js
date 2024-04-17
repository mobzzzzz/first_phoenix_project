// MBTI부분에 마우스 올라가면 MBTI 나오게하기
$("#top-right-mbti-title").mouseenter(function(){$(".top-right-mbti-items-alphabets").toggle()
});

// 알파벳 E를 누르면 숨겨져있던 진짜 MBTI나오기
$("#top-right-mbti-easter-egg-e").click(function(){
    $("#top-right-mbti-easter-egg").css("display","inline")
})


// 진짜 MBTI 2초마다 계속 숨기기
setInterval(function(){
    $("#top-right-mbti-easter-egg").css("display","none")
},2000)

