function capnhat(){
    var sum=0;
    //xử lí tính thành tiền cho từng dòng,tính tổng tiền giỏ hàng
    $('.sp').each(function(index,tr){
        // chuyển đối tượng jquery
        tr=$(tr);
        //số lượng
        var sl=tr.find('.sl input').val();
       //kiem tra dung hay sai console.log(sl);
       //lấy ô don giá
       var gia=tr.find('.gia');
       gia.html(gia.data('value').toLocaleString('vi',{style:'currency',currency:'VND'}));
      //kiem tra thoi console.log(gia.data('value'));
      gia=gia.data('value');
      //tính thành tiền
      var tt=sl*gia;
      //hien thành tiền vào 
      tr.find('.tt').html((sl*gia).toLocaleString('vi',{style:'currency',currency:'VND'}));
      //tính ô tổng tiền
      sum+=sl*gia;
    });
    $('#tong').html(sum.toLocaleString('vi',{style:'currency',currency:'VND'}));
}
$(function(){
    capnhat();
    //gán hàm sử lý sự kiện thay đổi số lượng gán vào giỏ hàng nhưng lọc lại các sự kiện selector input
    $('#giohang').on('input','.sl input',function(event){
        //đối tượng this là đối tượng phát sinh sự kiện(evnet.target)
        var input=$(this);
        var sl=input.val();
        //lấy dòng chứa input ra cập nhật
        var tr=input.closest('.sp');
        var ten=tr.find('.ten').text();
        if(sl<=0){
            //hỏi muốn xóa ko;
            var xoa=confirm('Xóa sản phẩm'+ten+' ?')
            if(xoa)
            {
                tr.remove();
            }
            else{
                input.val(1);
            }
        }
        capnhat();
    });
    //gán hàm sự kiện nút xóa
    $('#giohang').on('click','.btn-xoa',function(event){
        //lấy dòng chứa nút bấm
        var tr=$(this).closest('.sp');
        var ten=tr.find('.ten').text();
        var xoa=confirm('Xóa sản phẩm'+ten+' ?')
            if(xoa)
            {
                tr.remove();
                capnhat();
            }
    });
});