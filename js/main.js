document.getElementById("btnTinh").addEventListener("click",function(e){
    e.preventDefault();
    var name = document.getElementById("inputName").value;
    var thuNhap = parseInt(document.getElementById("inputThuNhapNam").value); 
    var soNguoi = parseInt(document.getElementById("inputSoNguoi").value);
    var thueThuNhap = thuNhap - 4000000 - soNguoi*1600000;
    if(name != "" || thuNhap != "" || soNguoi !=""){
        if(thueThuNhap < 60000000){
            thueThuNhap - 5/100;
            alert( "Xin chào " + name + "\n"+"Tổng thuế thu nhập năm: " + thuNhap +" VNĐ"+ "\n" + "Số người phụ thuộc: " + soNguoi + "\n" + "Thu nhập chịu thuế: " + thueThuNhap + " VNĐ");
        }else if (60000000 < thueThuNhap && thueThuNhap <= 120000000){
            thueThuNhap - 10/100;
            alert( "Xin chào " + name + "\n"+"Tổng thuế thu nhập năm: " + thuNhap +" VNĐ"+ "\n" + "Số người phụ thuộc: " + soNguoi + "\n" + "Thu nhập chịu thuế: " + thueThuNhap + " VNĐ");
        }else if (120000000 < thueThuNhap && thueThuNhap <= 210000000){
            thueThuNhap - 15/100;
            alert( "Xin chào " + name + "\n"+"Tổng thuế thu nhập năm: " + thuNhap +" VNĐ"+ "\n" + "Số người phụ thuộc: " + soNguoi + "\n" + "Thu nhập chịu thuế: " + thueThuNhap + " VNĐ");
        }else if (210000000 < thueThuNhap && thueThuNhap <= 348000000){
            thueThuNhap - 20/100;
            alert( "Xin chào " + name + "\n"+"Tổng thuế thu nhập năm: " + thuNhap +" VNĐ"+ "\n" + "Số người phụ thuộc: " + soNguoi + "\n" + "Thu nhập chịu thuế: " + thueThuNhap + " VNĐ");
        }else if (348000000 < thueThuNhap && thueThuNhap <= 624000000){
            thueThuNhap - 25/100;
            alert( "Xin chào " + name + "\n"+"Tổng thuế thu nhập năm: " + thuNhap +" VNĐ"+ "\n" + "Số người phụ thuộc: " + soNguoi + "\n" + "Thu nhập chịu thuế: " + thueThuNhap + " VNĐ");
        }else if (624000000 < thueThuNhap && thueThuNhap <= 960000000){
            thueThuNhap - 30/100;
            alert( "Xin chào " + name + "\n"+"Tổng thuế thu nhập năm: " + thuNhap +" VNĐ"+ "\n" + "Số người phụ thuộc: " + soNguoi + "\n" + "Thu nhập chịu thuế: " + thueThuNhap + " VNĐ");
        }else {
            thueThuNhap - 35/100;
            alert( "Xin chào " + name + "\n"+"Tổng thuế thu nhập năm: " + thuNhap +" VNĐ"+ "\n" + "Số người phụ thuộc: " + soNguoi + "\n" + "Thu nhập chịu thuế: " + thueThuNhap + " VNĐ");
        }
    }else{alert("Vui lòng nhập dữ liệu")}
});


var nhaDan = document.getElementById("nhaDan");
var doanhNghiep= document.getElementById("doanhNghiep");
var visible = document.getElementById("visible");
nhaDan.addEventListener("click",function(){
    visible.style.display="none";
});
doanhNghiep.addEventListener("click",function(){
    visible.style.display="block";
});
document.getElementById("btnTinh2").addEventListener("click",function(e){
    e.preventDefault();
    var maKH = document.getElementById("inputMKH").value;
    var soKetNoi = document.getElementById("inputSoKetNoi").value;
    var soKenh = document.getElementById("inputKenh").value;
    var loaiKH = "";
    
    const hoaDonNhaDan = 4.5;
    const phiNhaDan = 20.5;
    const kenhCaoCapNhaDan = 7.5;

    const hoaDonDoanhNghiep = 15;
    const phiDoanhNghiep = 75;
    const kenhCaoCapDoanhNghiep = 50;

    var tienCap = 0;

    if(nhaDan.checked){
        loaiKH = nhaDan.value;
        tienCap = hoaDonNhaDan + phiNhaDan + (7.5*soKenh);
        alert( "Xin chào " + maKH +"\n"+ "Khách hoàng thuộc loại: "+ loaiKH + "\n"+"Tổng số kênh cao cấp: " + soKenh + "\n" + "Tổng số tiền cần trả: " + tienCap + " $");
    }else if(doanhNghiep.checked){
        loaiKH = doanhNghiep.value;
        if( soKetNoi > 0 &&soKetNoi <= 10){
            tienCap = hoaDonDoanhNghiep + phiDoanhNghiep * soKetNoi + kenhCaoCapDoanhNghiep * soKenh;
            alert( "Xin chào " + maKH +"\n"+ "Khách hoàng thuộc loại: "+ loaiKH + "\n"+"Tổng số kênh cao cấp: " + soKenh + "\n" + "Tổng số tiền cần trả: " + tienCap + " $");
        }else if(soKetNoi > 10){
            tienCap = hoaDonDoanhNghiep + (phiDoanhNghiep * 10 +  ((soKetNoi - 10) * 5 )) + kenhCaoCapDoanhNghiep * soKenh;
            alert( "Xin chào " + maKH +"\n"+ "Khách hoàng thuộc loại: "+ loaiKH + "\n"+"Tổng số kênh cao cấp: " + soKenh + "\n" + "Tổng số tiền cần trả: " + tienCap + " $");
        }else{alert("Dữ liệu không hợp lệ");}
    }else {alert("Loại khách hàng không xác định");}
   
    
});
