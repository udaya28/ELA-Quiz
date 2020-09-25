var box = document.querySelectorAll('.col-2');
var height = document.querySelectorAll('.col-2')[0].clientWidth;
box.forEach((ele) => {
  ele.style.height = `${height}px`;
});
box.forEach((ele) => {
  ele.style.backgroundColor = 'rgb(184, 238, 255)';
});
if(window.prompt("Password Please..") === "javascript"){
  console.log(data);

console.log(box);



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
    // console.log(e.target);
    // console.log(e.target.parentElement);
    // console.log(e.target.tagName)
    if (e.target.tagName == 'H1') {
      var questionNumber = e.target.parentElement.id;
      // console.log(e.target.parentElement);
      var ele = e.target.parentElement;
    } else {
      questionNumber = e.target.id;
      ele = e.target;
    }

    let question = data[questionNumber];
    // console.log(question);
    document.getElementById('question').innerHTML = question['question'];
    try{
      document.getElementById("image").setAttribute("src",`${question.url}`)
    }catch{
      document.getElementById("image").setAttribute("src","")
    }
    
    document.getElementById('op-1').innerHTML = question[1];
    document.getElementById('op-2').innerHTML = question[2];
    document.getElementById('op-3').innerHTML = question[3];
    document.getElementById('op-4').innerHTML = question[4];
    // document.getElementById("checkMark").setAttribute("checked" ,"checked");

    container.style.display = 'none';
    questionBox.style.display = 'block';
    // header.style.display = 'none';
    document.getElementById('question-number').innerHTML = questionNumber;
    document.getElementsByClassName('okay')[0].addEventListener('click', () => {
      let result = document.querySelector('input[name="answer"]:checked').value;
      // console.log(result);
      if (result == question['ans']) {
        swal({
          title: 'Correct',
          icon: 'success',
        }).then(() => {
          ele.style.backgroundColor = '';
          e.target.innerHTML = "";
          container.style.display = 'block';
          questionBox.style.display = 'none';
          // header.style.display = 'block';
        });
      } else {
        swal({
          title: 'Wrong',
          icon: 'error',
        }).then(() => {
          // e.target.style.backgroundColor = '';
          container.style.display = 'block';
          questionBox.style.display = 'none';
          header.style.display = 'block';
          
        });
      }
    });
  });
});

}else{
  alert("Sorry you don't have access..")
}

