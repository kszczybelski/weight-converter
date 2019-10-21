const kgInput = document.getElementById("kgInput");
document.getElementById("output").style.display = "none";
kgInput.addEventListener("input", e => {
  document.getElementById("output").style.display = "block";
  let kilogram = e.target.value;
  document.getElementById("gramsOutput").innerHTML = kilogram * 1000;
  document.getElementById("lbOutput").innerHTML = kilogram * 2.20462262;
  document.getElementById("ozOutput").innerHTML = kilogram * 35.2739619;
});
