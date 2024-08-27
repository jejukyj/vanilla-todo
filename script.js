// 다들 화이팅!! ٩( *˙0˙*)۶
const todoInput = document.querySelector('#todoInput'); //입력창
const addBtn = document.querySelector('#addBtn'); //+ 버튼
const todoList = document.querySelector('#todoList'); //TO DO
const doneList = document.querySelector('#doneList'); //DONE
const todoTitle = document.querySelector('.todo-box .list-title'); // TO DO 제목
const doneTitle = document.querySelector('.done-box .list-title'); // DONE 제목

function EnterKeyDown() {
  //엔터키로 추가
  if (window.event.keyCode === 13 && todoInput.value !== '') {
    addToDo();
  }
}

addBtn.addEventListener('click', () => {
  //+ 버튼으로 추가
  if (todoInput.value !== '') addToDo();
});

function addToDo() {
  let todoContents = todoInput.value;

  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  li.appendChild(span); //appendChild() : 선택한 요소 안에 자식요소를 추가
  li.appendChild(btn);

  span.textContent = todoContents; //textContent : 노드 내의 모든 텍스트 추출
  btn.textContent = '✖️';

  todoList.appendChild(li);

  todoInput.value = ' ';

  updateCount();

  //완료
  li.addEventListener('click', () => {
    li.classList.toggle('complete');
    if (li.classList.contains('complete')) {
      doneList.appendChild(li);
    } else {
      todoList.appendChild(li);
    }
    // console.log(li.classList.contains('complete'));
    updateCount();
  });

  //삭제
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    updateCount();
  });
}

function updateCount() {
  const todoCnt = todoList.children.length;
  const doneCnt = doneList.children.length;

  todoTitle.textContent = `📝 TO DO (${todoCnt})`;
  doneTitle.textContent = `✔️ DONE (${doneCnt})`;
}
