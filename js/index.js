function domID(id) {
  return document.getElementById(id);
}

var DSSV = [];

// lấy dữ liệu từ local storage
var data = localStorage.getItem("DSSV_JSON");
// truyền data vào DSSV
DSSV = JSON.parse(data);

renderDSSV();

function renderDSSV() {
    var contentHTML = "";
    for (var i = 0; i < DSSV.length; i++) {
      var sv = DSSV[i];
      var string = `<tr>
      <td>${sv.ma}</td>
      <td>${sv.ten}</td>
      <td>${sv.email}</td>
      <td>0</td>
      <td><button id="btnDelete" onclick="xoaSV('${sv.ma}')" class="btn btn-danger">Delete</button></td>
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
