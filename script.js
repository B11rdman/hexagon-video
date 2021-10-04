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

const player = document.getElementById("video-player-hex");

const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];

document.addEventListener("click", (e) => {
  if (e.target.id === "video-player-hex") {
    modal.style.display = "block";

    close.onclick = function () {
      modal.style.display = "none";
      player.play();
    };
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

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    player.play();
  }
};
