/* 1. 선택자
    01.getElementByTageName
    02.getElementsById 
    03.getElementsByClassName
    04.querySelector
    05.querySelectorAll
*/


// 2. 내용 접근
// textContent : 선택한 요소에서 HTML 요소를 제거한 순수한 텍스트 데이터의 값
// innerText : textContent와 비슷하지만 CSS에 종속적이라서 hidden시에 못 읽음
console.log(qsClass2.textContent);
console.log(tagName[0].textContent);
qsClass2.textContent = "나는 tweet box가 아니야";  // 내부 내용 변경

// innerHTML : 선택한 요소의 HTML 태그를 그대로 제공 (보안에 취약)
console.log(qsTag.innerHTML);




// 3. element 생성 및 추가
// 3-1. element 생성
const p1 = document.createElement('p');
const p2 = document.createElement('p');

// 3-2. element에 컨텐츠를 대입
p1.textContent = "이영서";
p2.textContent = "기획/디자인";
// 3-2까지 과정으로는 메모리에 element가 존재


// 3-3. element 추가할 부모 요소
const parent = document.getElementById("parent");

// 3-4. element를 부모 요소의 자식 요소로 추가 
// 3-4. 이미 다른 element가 존재할 경우 마지막 자식 요소로 추가됨
parent.appendChild(p1);
parent.appendChild(p2);

// 3-5. 부모 요소의 첫 번째 자식 선택
const firstChild = parent.childNodes[0];
console.log("firstClild는", firstChild);




// 4. element 삭제
// .remove()



// 5. element 교체
// .replaceChild(a, b); a를 b로 교체




// 6. 클래스 조작
// className : 클래스 이름  / classList : 클래스 이름들
console.log(qsClass1.className);
console.log(qsClass1.classList);

// classList.add(a) : 클래스 추가


// classList.remove(a) : 클래스 삭제


// classList.replace(a, b) : 클래스 이름 a에서 b로 수정


// classList.toggle(a) : 클래스a를 추가했다가 제거했다가 (toggle)
// add와 remove를 동시에 사용할 때 사용




// 7. 스타일 조작 - sytle.css속성
qsClass1.style.color = "blue";
qsClass1.style.fontSize = "40px";