$(document).ready(function () {
  $(":button").click(function (e) {
    let angka1 = parseInt($("#firstNumber").val());
    let angka2 = parseInt($("#lastNumber").val());
    let hasil = $(".total");
    let result;

    if (e.target.title === "tambah") {
      result = angka1 + angka2;
    } else if (e.target.title === "kurang") {
      result = angka1 - angka2;
    } else if (e.target.title === "kali") {
      result = angka1 * angka2;
    } else {
      result = parseFloat(angka1 / angka2).toFixed(2);
    }

    hasil.html(`<span class="total">${result ? result : 0}</span> </p>`);
  });
});
