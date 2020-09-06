console.log(data);
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
var header = document.getElementsByClassName('header')[0];
var close = document
  .getElementsByClassName('close')[0]
  .addEventListener('click', () => {
    container.style.display = 'block';
    header.style.display = 'block';
    questionBox.style.display = 'none';
  });
box.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    console.log(e.target.id);
    let questionNumber = e.target.id;
    let question = data[questionNumber];
    console.log(question);
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('op-1').innerHTML = question[1];
    document.getElementById('op-2').innerHTML = question[2];
    document.getElementById('op-3').innerHTML = question[3];
    document.getElementById('op-4').innerHTML = question[4];

    container.style.display = 'none';
    questionBox.style.display = 'block';
    // header.style.display = 'none';
    document.getElementById('question-number').innerHTML = questionNumber;
    document.getElementsByClassName('okay')[0].addEventListener('click', () => {
      let result = document.querySelector('input[name="answer"]:checked').value;
      console.log(result);
      if (result == question['ans']) {
        swal({
          title: 'Correct',
          icon: 'success',
        }).then(() => {
            e.target.style.backgroundColor = '';
            container.style.display = 'block';
            questionBox.style.display = 'none';
            // header.style.display = 'block';
          });
      } else {
        swal({
          title: 'Wrong',
          icon: 'error',
        }).then(() => {
          e.target.style.backgroundColor = '';
          container.style.display = 'block';
          questionBox.style.display = 'none';
          header.style.display = 'block';
        });
      }
    });
  });
});
