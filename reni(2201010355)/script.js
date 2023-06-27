$(document).ready(function () {
  $("#booking").click(function () {
    var checkInDateInput = $("#checkInDateInput").val();
    var checkOutDateInput = $("#checkOutDateInput").val();
    var numGuestsInput = $("#numGuestsInput").val();
    var locationInput = $("#locationInput").val();

    var konfir = $("#konfirmasi").val();
    var result;

    if (konfir === "add") {
      result = parseFloat(checkInDateInput) + parseFloat(checkInDateInput);
    } else if (konfir === "subtract") {
      result = parseFloat(checkOutDateInput) - parseFloat(checkOutDateInput);
    } else if (konfir === "multiply") {
      result = parseFloat(no_telp) * parseFloat(no_telp);
    } else if (konfir === "divide") {
      result = parseFloat(locationInput) / parseFloat(ocationInput);
    } else if (konfir === "divide") {
      result = parseFloat(email) / parseFloat(email);
    }

    $("#result").text("berhasil: " + result);
  });
});
