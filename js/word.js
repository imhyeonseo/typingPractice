// 페이지 로드 시 카운트다운 시작
window.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});

function startCountdown() {
    const popup = document.getElementById('countdown-popup');
    const countdownNumber = document.getElementById('countdown-number');
    let count = 5;
    
    // 팝업 표시
    popup.style.display = 'flex';
    
    const countdownInterval = setInterval(function() {
        count--;
        
        if (count > 0) {
            countdownNumber.textContent = count;
        } else {
            // 카운트가 0이 되면 팝업 숨기기
            popup.style.display = 'none';
            clearInterval(countdownInterval);
        }
    }, 1000); // 1초마다 실행
}