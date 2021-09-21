const initialValue = 10000;
const serviceValues = Object.freeze({
  service1: {
    percent: 0.05, // percent presented in range 0-1
  },
  service2: {
    percent: 0.1,
  },
  service3: {
    percent: 0.15,
  },
  service4: {
    percent: 0.2,
  },
});

const player = document.getElementById("video-player");

//////////////////////////// NEW CODE ////////////////////////////
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];
////////////////////////////////////////////////////////

document.addEventListener("click", (e) => {
  if (e.target.id === "video-player") {
    //////////////////////////// OLD CODE ////////////////////////////
    // const wrapper = document.getElementsByClassName("web-cam")[0];
    // player.classList.add("full-screen-player");
    // wrapper.classList.add("full-screen-wrapper");

    // player.muted = false;
    // player.controls = false;
    // player.play();

    // player.addEventListener("ended", (event) => {
    //   player.classList.remove("full-screen-player");
    //   wrapper.classList.remove("full-screen-wrapper");
    // });
    ////////////////////////////////////////////////////////

    //////////////////////////// NEW CODE ////////////////////////////
    modal.style.display = "block";

    close.onclick = function () {
      modal.style.display = "none";
      player.play();
    };
    ////////////////////////////////////////////////////////
  }

  if (e.target.id === "calculate") {
    let price = initialValue;
    const result = document.getElementById("result");
    const checkBoxes = document.getElementsByClassName("check");

    for (let i = 0; i < checkBoxes.length; i++) {
      const { checked, id } = checkBoxes[i];
      checked && (price += initialValue * serviceValues[id].percent);
    }

    result.innerHTML = price + "ԴՐ";
  }
});

//////////////////////////// NEW CODE ////////////////////////////
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    player.play();
  }
};
