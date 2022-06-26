const schoologyButton = document.getElementById("schoology");
const driveButton = document.getElementById("google-drive");
const titleButton = document.getElementById("title");
schoologyButton.addEventListener("click", OpenSchoology);
function OpenSchoology() {
    window.open("https://isl.schoology.com/home");
}
driveButton.addEventListener("click", OpenDrive);
function OpenDrive() {
    window.open("https://drive.google.com/drive/my-drive");
}
titleButton.addEventListener("click", ReloadPage);
function ReloadPage() {
    window.location.reload();
}
