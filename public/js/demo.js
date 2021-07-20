// var x;//Khai báo biên x
// x=15;
// console.log(x)
//
// if (x<20){
//     console.log(x);
// }else {
//     console.log(x+1);
// }
//
// for (var i=0;i<20;i++){
//     console.log("Giá trị của i là :"+i);
// }
//
// var arr=[] ;//Khai báo 1 mảng,ko giới hạn số phần tử
// arr[0]=101;
// arr[1]="Xin chào";//Khonong ràng buộc kiểu dữ liệu
// arr[2]="12";
// arr[2]+=15;//="1215"
// console.log(arr[0]);//in 1 phần tử
// console.log(arr);//In cả chuỗi
// arr[3]=[1,2,3,4];//Không giới hạn phần tử là mảng
// arr[4]=["xin chào",1,2,[1,2,3]];
//
// var arr2=[];
// for (var i=0;i<20;i++){
//     arr2.push(i*i);//arr2[i]=i*i;Thêm phần tử i*i vào mảng
// }
//  arr2.push(555);//arr2[20]=5 cho pt vao cuoi ds
//
// function tinhtong(a,b){
//     return a+b;
// }
// var c=tinhtong(5,6);
// function binhphuong(a,b) {
//     console.log(a*b);
// }

//alert("Trang Web trên 18+ ,thoát nếu bạn chưa đủ tuổi");
// var kt=confirm("Ban chắc chắn nộp bài");
// if (kt){
//     alert("chúc mừng");
// }else{
//     alert("Chia buồn");
// }

// var s=prompt("Nhập tuổi của bạn");//trả về string
// var t=parseInt(s);//Chuyển từ String sang Int
// /*Nguyên lí chuyển đổi kiểu
//     18 -> 18
//     18a8 -> 18 _ dừng ở kí tự ko phải số
//     a188 -> not a number (NaN)
// */
// if (t != NaN && t<18){
//     window.location.href="https://www.24h.com.vn/";
// }else {
//     alert("Tiếp tục đăng nhập");
// }
// console.log(t);

//===========================================================

//thuc thi 1 lân sau 5s
// setTimeout(function (){
//     alert("hello");
// },5000);
//
// //Thực thi vô hạn nếu ko cài đk if với k
// var k=0;
// var si = setInterval(function (){
//     alert("Hello");
//     k++;
//     if (k<3){
//         clearInterval(si);
//     }
// },5000);
//
// //thưc thi nếu thoa man đk
// var n=prompt("Nhâp số bạn chọn");
// n=parseInt(n)
// if (n!=NaN){
//     var rd=Math.random()*100;
//     rd=parseInt(rd);
//     if (rd == n){
//         alert("chuc mừng");
//         clearInterval();
//     }else {
//         alert("Not good");
//     }
// }

var n=600,i=9,j=60;
setInterval(function (){
    if (j<10){

        j="0"+j;
        if(j=="0"){

            i--;
        }
    }


    console.log("0"+i+":"+j);
    i=parseInt(i);
    j=parseInt(j);

    j--;



},1000)