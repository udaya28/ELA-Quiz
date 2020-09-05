var box = document.querySelectorAll(".col-2")
var height = document.querySelectorAll(".col-2")[0].clientWidth;
console.log(box)
console.log(height)

box.forEach((ele)=>{
    ele.style.height = `${height}px`;
})
box.forEach((ele)=>{
    ele.style.backgroundColor = "#505050";
})

box.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "";
    })
})

