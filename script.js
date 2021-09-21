document.addEventListener("click", (e) => {
  if (e.target.id === "video-player") {
    const player = document.getElementById("video-player");
    const wrapper = document.getElementsByClassName("web-cam")[0];

    player.classList.add("full-screen-player");
    wrapper.classList.add("full-screen-wrapper");

    player.muted = false;
    player.controls = false;
    player.play();

    player.addEventListener("ended", (event) => {
      player.classList.remove("full-screen-player");
      wrapper.classList.remove("full-screen-wrapper");
    });
  }
});
