function getFormInfo() {
  var ma = domID("txtMaSV").value;
  var ten = domID("txtTenSV").value;
  var email = domID("txtEmail").value;
  var matKhau = domID("txtPass").value;
  var diemToan = domID("txtDiemToan").value * 1;
  var diemLy = domID("txtDiemLy").value * 1;
  var diemHoa = domID("txtDiemHoa").value * 1;

  var sv = {
    ma: ma,
    ten: ten,
    email: email,
    matKhau: matKhau,
    diemToan: diemToan,
    diemLy: diemLy,
    diemHoa: diemHoa,
    tinhDTB: function () {
      return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    },
  };
    return sv;
}
