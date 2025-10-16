// 입력된 텍스트를 저장할 변수
let inputText = '';

// 페이지 로드 시 카운트다운 시작
window.addEventListener("DOMContentLoaded", function () {
    startCountdown();
    setupTypingInput();
});

let count = 5;

function startCountdown() {
    const popup = document.getElementById("countdown-popup");
    const countdownNumber = document.getElementById("countdown-number");

    // 팝업 표시
    popup.style.display = "flex";

    const countdownInterval = setInterval(function () {
        count--;

        if (count > 0) {
            countdownNumber.textContent = count;
        } else {
            // 카운트가 0이 되면 팝업 숨기기
            popup.style.display = "none";
            clearInterval(countdownInterval);
        }
    }, 1000); // 1초마다 실행
}



// typing input에 엔터 이벤트 설정
function setupTypingInput() {
    const typingInput = document.getElementById('typing');
    const typingOutput = document.getElementById('result')
    const typingResult = document.getElementById('yesOrNo')
    const wordExample = document.getElementById('example')

    typingInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            // 입력된 텍스트를 변수에 저장
            inputText = typingInput.value;
            
            
            // 입력 필드 비우기
            typingInput.value = '';

            // 입력된 텍스트 표시
            typingOutput.textContent = inputText
            
            // console.log('저장된 텍스트:', inputText); // 확인용 로그
            if(inputText == wordExample.textContent){
                yesOrNo.textContent = "일치합니다."
            } else {
                yesOrNo.textContent = "불일치합니다."
            }
        }
    });
}