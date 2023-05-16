// btn 클릭시에
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    window.alert("버튼을 누르셨요?");
});



// 스크롤 내릴 때
window.addEventListener("scroll", isScroll);
function isScroll(){
    console.log("스크롤 중");
}