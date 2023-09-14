// RP to WON
$("button:first").click(function (e) {
  e.preventDefault();
  let num = $("input:first").val();

  if (num) {
    let rp1 = Math.round(num * 10.208333333333333);
    $("p:first").text(`${num}RP = ${rp1}` + "₩");
  }
});

// WON to RP
$("button:last").click(function (e) {
  e.preventDefault();
  let num = $("input:last").val();
  num = Number($("input:last").val());

  if (num) {
    let rp1 = Math.round(num / 10.208333333333333);
    $("p:last").text(`${num}₩ = ${rp1}` + "RP");
  }
});
