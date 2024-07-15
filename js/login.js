function send(){
    var arr =document.getElementsByTagName('input')
    var username =arr[2].value;
    var password=arr[3].value;
    var confirmpassword=arr[4].value;
    var Phone =arr[5].value;
    var email=arr[6].value;
    var check =arr[7].checked;
    var reGexpasswod = /^[a-zA-Z0-9]*$/;
    var mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/;
    if(username==""|| password==""||confirmpassword==""||email==""||Phone==""){
        alert("Không Được Bỏ Trống");
        return;
    }
    if(password!=confirmpassword){
        alert("Mật khẩu Không trùng")
        return;
    }  
    var password=document.getElementById('password').value;
    if(!reGexpasswod.test(password))
    {
        alert("Mật khẩu không được chứa ký tự đặt biết");
        return ;
    }
    if(!mediumRegex.test(password))
    {
        alert("Mật khẩu Phải có ít nhất 1 số, 1 ký tự in hoa và 1 ký tự thường");
        return ;
    }
  
    if(isNaN(Phone)||Phone.length<8||Phone.length>11) {//kiem tra co phai so ko
        alert("Số điện thoại không hợp lệ");
        return;
    }
    if(check){
    }else{
        alert("Chưa Đồng ý Điều Khoản");
        return;
    }
    if(username.length<6){
        alert("Tên đăng nhập quá ngắn");
        return;
    }
    if(username.length>32){
        alert("Tên đăng nhập quá dài");
        return;
    }
   confirm('Đăng Ký Tài Khoản Thành Công');
}

function signup(){
    var arr =document.getElementsByTagName('input')
    var username1 =arr[0].value;
    var password2=arr[1].value;
    if(username1==""|| password2==""){
        alert("Không Được Bỏ Trống");
        return;
    }
    else
    {
        window.location='./index.html'
    }
}
var x = true;
var y= true;
function myfunction(){
   if(x||y){
    document.getElementById('password2').type="text";
    x=false;
    document.getElementById('password').type="text";
    y=false;
   }
   else{
    document.getElementById('password2').type="password";
    x=true;
    document.getElementById('password').type="password";
    y=true;
   }

}
function Show(){
    if(
        document.getElementById('text').style.display==="none"){
        document.getElementById('text').style.display="block";
        document.getElementById('myform').innerHTML="Đăng Nhập";
    }else{
        document.getElementById('text').style.display="none";
        document.getElementById('myform').innerHTML="Đăng Ký";
    }
}
