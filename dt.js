const listImage=document.querySelector(".list-image");
console.log(listImage);
const imgs=document.getElementsByClassName("image");
const length = imgs.length // độ dài của arr chứa tất cả ảnh
let current = 0;   // vì tới ảnh 2 nó dừng nên ta cần set biến current rồi lấy width*-1*với current để slide chuyển động

const handle= ()=>{ //cta set hàm vì cả nút prev,next lẫn setInterval đều cần, nên set để chỉ cần gọi hàm lại
  current++;  
  if(current==length ){ // khi current = độ dài tất cả phần tử của arr chứa ảnh thì set để slide quay trở lại
    current = 0; //thì khi này current lại = 0 và  slide tiếp tục trượt sang trái rồi nhẩy xuống chạy dk else 
    let width =imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0px)`
  }else{
    let width =imgs[0].offsetWidth // cho slide trượt sang bên trái theo độ dài ảnh
  listImage.style.transform = `translateX(${width * -1 * current}px)` // nhân -1 để ảnh trượt sang trái nhưng 500*-1 thì bằng -500 mà muốn lướt sang ảnh 3 thì phải thành -1000 nên tới ảnh 2 thì nó dừng

  }

}
setInterval(handle,4000)

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
btnNext.addEventListener('click',()=>{
  handle()
})
btnPrev.addEventListener('click',()=>{
  
  if(current== 0){ // khi current = 0 nghĩa là đang ở pic1 
    current = length-1; //thì set cho current quay ngược lại ảnh pic4 - ảnh phía trc
    let width =imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width*-1*current}px)` // thay đổi hàm này để slide trượt liên tục về bên trái 
  }else{
    current--;  
    let width =imgs[0].offsetWidth // cho slide trượt sang bên trái theo độ dài ảnh
  listImage.style.transform = `translateX(${width * -1 * current}px)` // nhân -1 để ảnh trượt sang trái nhưng 500*-1 thì bằng -500 mà muốn lướt sang ảnh 3 thì phải thành -1000 nên tới ảnh 2 thì nó dừng

  }
})
