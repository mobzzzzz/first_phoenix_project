$("#top-right-mbti-title").mouseenter(function(){$(".top-right-mbti-items-alphabets").toggle()
});

$("#top-right-mbti-easter-egg-e").click(function(){
    $("#top-right-mbti-easter-egg").css("display","inline")
})



setInterval(function(){
    $("#top-right-mbti-easter-egg").css("display","none")
},2000)

