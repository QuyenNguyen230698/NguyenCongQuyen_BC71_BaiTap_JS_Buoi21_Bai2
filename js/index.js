function domID(id) {
  return document.getElementById(id);
}

var DSSV = [];

// lấy dữ liệu từ local storage
var data = localStorage.getItem("DSSV_JSON");
// truyền data vào DSSV
// DSSV = JSON.parse(data);
var svArr = JSON.parse(data);
for (var i = 0; i < svArr.length; i++) {
    var data = svArr[i];
    var sv = new model(
      data.ma,
      data.ten,
      data.email,
      data.matKhau,
      data.diemToan,
      data.diemLy,
      data.diemHoa,
      data.tinhDTB,
    )
    // duyệt mảng xong thì truyền dữ liệu vào mảng DSSV
    DSSV.push(sv);
  }

renderDSSV();

function renderDSSV() {
    var contentHTML = "";
    for (var i = 0; i < DSSV.length; i++) {
      var sv = DSSV[i];
      var string = `<tr>
      <td>${sv.ma}</td>
      <td>${sv.ten}</td>
      <td>${sv.email}</td>
      <td>${sv.tinhDTB()}</td>
      <td><button id="btnDelete" onclick="xoaSV('${sv.ma}')" class="btn btn-danger">Delete</button>
      <button id="btnFix" onclick="suaSV('${sv.ma}')" class="btn btn-warning">Fix</button></td>
  </tr>`;
      contentHTML += string;
    }
    domID("tbodySinhVien").innerHTML = contentHTML;
  }

function themSV() {
  var sv = getFormInfo();
  DSSV.push(sv);
  console.log(DSSV);

  //tạo JsonDssv JSON
  var JsonDssv = JSON.stringify(DSSV);
  //luu JsonDssv vao local storage
  localStorage.setItem("DSSV_JSON", JsonDssv);

  renderDSSV();
}

function xoaSV(ma){
    var viTri = DSSV.findIndex(function(item){
        return item.ma === ma;
    })
    if (viTri != -1) {
        DSSV.splice(viTri, 1);

        var xoaJSON = JSON.stringify(DSSV);
        localStorage.setItem("DSSV_JSON", xoaJSON);

        renderDSSV();
    }
}

function suaSV(ma) {
    var viTri = DSSV.findIndex(function(item){
        return item.ma === ma;
    })
    if (viTri != -1) {
        var sv = DSSV[viTri];
        domID("txtMaSV").value=sv.ma;
        domID("txtTenSV").value=sv.ten;
        domID("txtEmail").value=sv.email;
        domID("txtPass").value=sv.matKhau;
        domID("txtDiemToan").value=sv.diemToan;
        domID("txtDiemLy").value=sv.diemLy;
        domID("txtDiemHoa").value=sv.diemHoa;
    }
    domID("txtMaSV").setAttribute("readonly", true);
}

function capNhatSV() {
    var sv = getFormInfo();
    var viTri = DSSV.findIndex(function(item){
        return item.ma === sv.ma;
    })
    DSSV[viTri] = sv;
    var capNhatJSON = JSON.stringify(DSSV);
    localStorage.setItem("DSSV_JSON", capNhatJSON);

    renderDSSV();
}

