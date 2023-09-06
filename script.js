function getScreenResolution() {
  var width = screen.width;
  var height = screen.height;
  var resolution = width + "x" + height;
  return resolution;
}
function getWidth() {
  return "Screen Width: " + screen.width + " pixels";
}
function getHeight() {
  return "Screen Height: " + screen.height + " pixels";
}
document.getElementById("resolution").innerHTML = getScreenResolution();
document.getElementById("h4-width").innerHTML = getWidth();
document.getElementById("h4-height").innerHTML = getHeight();
