const listImage=document.querySelector(".list-image");
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



///js thêm nè

const megaMenus = document.querySelectorAll('.mega-menu');

// console.log(megaMenu);
const overlay = document.querySelector('.nav__overlay');
megaMenus.forEach(megaMenu => {
  if (megaMenu && overlay) {
    // Thêm sự kiện mouseover vào phần tử mega-menu
    megaMenu.addEventListener('mouseover', () => {
        // Thêm CSS cho overlay khi rê chuột vào mega-menu
        overlay.style.opacity = 1;
        
    });
  
    // Thêm sự kiện mouseout vào phần tử mega-menu
    megaMenu.addEventListener('mouseout', () => {
        // Xóa CSS cho overlay khi rời chuột khỏi mega-menu
        overlay.style.opacity = 0; // Hoặc bạn có thể đặt lại giá trị mặc định khác nếu cần
    });
  } else {
    console.error('Không tìm thấy phần tử mega-menu hoặc nav__overlay.');
  }
  // Thực hiện các thao tác bạn muốn với từng phần tử mega-menu ở đây
});

// navigator tabs
const tabs=document.querySelectorAll(".tags");

// const products = document.querySelectorAll(".product_content")
const products =document.querySelectorAll(".product_content");
console.log(products)
console.log(tabs);
// nên tập console.log ra check, coi thử đã lấy đƯợc chưa nhé, rồi mới code tiếp từ từ
tabs.forEach((tags,index)=>{
  tags.addEventListener(('click'),(e)=>{
    tabs.forEach(tags=>{tags.classList.remove('active')}) //set để khi click sang tab2 thì xoá tab1 đã click đi
    tags.classList.add('active');

    const line = document.querySelector('.line');
    line.style.width=e.target.offsetWidth+"px"; //set để get ra width,left để line di chuyển
    line.style.left=e.target.offsetLeft+"px";

    console.log(products);
    products.forEach(product_content=>{
      product_content.classList.remove('active')
    });
    // chỗ này thêm index vào, để nó lấy giá trị theo index trong mảng products nè :))
    products[index].classList.add('active')
  })

})