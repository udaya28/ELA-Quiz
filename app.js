var box = document.querySelectorAll('.col-2');
var height = document.querySelectorAll('.col-2')[0].clientWidth;
console.log(box);

box.forEach((ele) => {
  ele.style.height = `${height}px`;
});
box.forEach((ele) => {
  ele.style.backgroundColor = '#252C4A';
});

var container = document.getElementsByClassName('container-main')[0];
var questionBox = document.getElementsByClassName('question-box')[0];
var close = document
  .getElementsByClassName('close')[0]
  .addEventListener('click', () => {
    container.style.display = 'block';
    questionBox.style.display = 'none';
  });
box.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    console.log(e.target.id);
    // e.target.style.backgroundColor = "";
    console.log(container);
    container.style.display = 'none';
    console.log(questionBox);
    questionBox.style.display = 'block';
    document.getElementsByClassName('okay')[0].addEventListener('click', () => {
      e.target.style.backgroundColor = '';
      container.style.display = 'block';
      questionBox.style.display = 'none';
    });
  });
});
