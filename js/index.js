function domID(id) {
  return document.getElementById(id);
}

var DSSV = [];

function themSV() {

    var sv = getFormInfo()
  
  DSSV.push(sv);
  console.log(DSSV);
  renderDSSV()
}

function renderDSSV() {
    var contentHTML = "";
    for (var i = 0; i < DSSV.length; i++){
        var sv = DSSV[i];
        var string = `<tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${sv.tinhDTB()}</td>
    <td><button id="btnDelete" class="btn btn-danger">Delete</button></td>
</tr>`;
contentHTML += string;
    }
    domID('tbodySinhVien').innerHTML = contentHTML;
}

