var videoFrame = document.getElementById("videoFrame");

videoFrame.addEventListener("load", function() {
  videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});

videoFrame.addEventListener("ended", function() {
  videoFrame.contentWindow.postMessage('{"event":"command","func":"seekTo","args":"0"}', '*');
});