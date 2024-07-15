// Sự kiện mở và đóng FORM lựa chọn màu sắc, size, kích thước, giá tiền của DESKTOP
const Btn_open = document.querySelector('.btn-sort');
// kiểm tra điều kiện biến trên có tồn tại không, nếu tồn tại thì tiếp tục thực thi.
if (Btn_open) {
    const openSort_Desktop_Mobile = e => {
        // e.stopPropagation(); // ngăn chặn sự kiện nổi bọt
        // mở phần tử ở desktop
        document.querySelector('.form-selective').classList.toggle('open')
        // mở phần tử ở mobile
        document.querySelector('.sub-select').classList.toggle('open')
    }
    Btn_open.onclick = openSort_Desktop_Mobile;
}
// Đóng Form lựa chọn Desktop bằng Button "Huỷ"
const Btn_close = document.querySelector('.btn-exit')
if (Btn_close) {
    const closeSort_Desktop = e => {
        document.querySelector('.form-selective').classList.remove('open')
    }
    Btn_close.onclick = closeSort_Desktop;
}
// Đóng Form lựa chon Mobile bằng Button "Huỷ"
const Btn_close_Mobile = document.querySelector('.btn-huy')
if (Btn_close_Mobile) {
    const closeSort_Mobile = e => {
        document.querySelector('.sub-select').classList.remove('open')
    }
    Btn_close_Mobile.onclick = closeSort_Mobile;

}
// Sự kiện mở và đóng các Item lựa chọn màu sắc, size, kích thước, giá tiền trên MOBILE.
const openSelectMobile = document.querySelectorAll('.select-responsive');
for (let i = 0; i < openSelectMobile.length; i++) {
    openSelectMobile[i].onclick = e => {
        e.currentTarget.querySelector('.show').classList.toggle('open');
    }
    // trả về phần tử của sự kiện đã được kích hoạt.
    // phần tử toggle() thể hiện sử ẩn hiện luân phiên.
}
// Sự kiện đóng mở icon Toggle
const clickToggle = document.querySelector('.toggle')
if (clickToggle) {
    const openToggle = e => {
        document.querySelector(".submenu-toggle").classList.add('open');
        document.querySelector(".background-dark").classList.add('open');
    }
    clickToggle.onclick = openToggle;
}
const clickCloseToggle = document.querySelector('.close-menutoggle')
if (clickCloseToggle) {
    const closeToggle = e => {
        document.querySelector(".submenu-toggle").classList.remove('open');
        document.querySelector(".background-dark").classList.remove('open');
    }
    clickCloseToggle.onclick = closeToggle;
}
/* Sự kiện mở Sub MENU Item ở Mobile */
const openSubMenuMobile = document.querySelectorAll('.drop-menu');
for (let i = 0; i < openSubMenuMobile.length; i++) {
    openSubMenuMobile[i].onclick = e => {
        let currentElement = e.currentTarget;
        let findItem = currentElement.closest('li');// truy xuất thẻ li gần nhất rồi  truy ngược lại .
        findItem.querySelector('.submenu-sp-item-mb').classList.toggle('open')
    }
}
// Sự kiên mở Form Search của Ipad và Mobile
const openSearch = document.querySelector('.btn-search-mb');
const clickSearchMobile = e => {
    e.preventDefault();
    document.querySelector(".navbar-search").classList.add('open')
    document.querySelector(".icon-search-x").classList.add('open')
}
openSearch.onclick = clickSearchMobile;
// Close search Mobile - Ipad
const clickCloseSearch = document.querySelector('.icon-search-x')
if (clickCloseSearch) {
    const closeSearch = e => {
        document.querySelector('.navbar-search').classList.remove('open')
        document.querySelector(".icon-search-x").classList.remove('open')
    }
    clickCloseSearch.onclick = closeSearch;
}
// ĐÓNG MỞ FORM ĐĂNG NHẬP
const openAccount = document.querySelector('.openaccount');
openAccount.onclick = e => {
    // e.stopPropagation();
    // e.preventDefault();
    document.querySelector(".login-create-acount").classList.toggle('openlogin');
}
//  Tăng giảm sản phẩm
const clickIncrease = document.querySelector('.increase')
if (clickIncrease) {
    const increase = e => {
        var x = document.getElementById("text").value;
        document.getElementById("text").value = parseInt(x) + 1;
    }
    clickIncrease.onclick = increase;
}
const clickReduction = document.querySelector('.reduction')
if (clickReduction) {
    var reduction = e => {
        x = document.getElementById("text").value;
        if (parseInt(x) > 1) {
            document.getElementById("text").value = parseInt(x) - 1;
        }
    }
    clickReduction.onclick = reduction;
}
//  Croll hiệu ứng Menu
const menuHeader = document.querySelector('.headerMenu')
window.addEventListener('scroll' , () => {
    const scrolled = window.scrollY;
     // console.log(crolled);
    if (scrolled > 15 ) {
        menuHeader.classList.add('scroll_background')
    }
    else {
        menuHeader.classList.remove('scroll_background')
    }
   
})
// Mở Form Paragraph Item Product
const openParagraphDetail = document.querySelectorAll('.detail-product');
if (openParagraphDetail) {
    for ( let i = 0 ; i < openParagraphDetail.length ; i++) {
        openParagraphDetail[i].onclick = e => {
            document.querySelector('.paragraph-detail').classList.toggle('open');
            // console.log(e);
        }
        
    }
}
const openParagraphTutorial = document.querySelectorAll('.tutorial-product');
if (openParagraphTutorial) {
    for ( let i = 0 ; i < openParagraphTutorial.length ; i++) {
        openParagraphTutorial[i].onclick = e => {
            document.querySelector('.paragraph-tutorial').classList.toggle('open');
            console.log(e);
        }
    }
}
// Slide Product
jQuery('.product-img-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: jQuery('.product-thumbnail'),
    customPaging: function (slider, i) {
        // console.log(slider.$slides);
        let thumb = jQuery(slider.$slides[i]).attr("data-thumb");
        let views = `<div class="thumb-prd-item" style="background-image: url(${thumb})" ></div>`;
        return `${thumb ? views : ''}`;
    }
})
// Slide Header Index
$(document).ready(function () {
    $('.slide_index').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
// Slide show sự kiện 2
$(document).ready(function () {
    $('.product-likes-item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    });
});