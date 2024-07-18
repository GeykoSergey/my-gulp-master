console.log("RS");
import noUiSlider from "../vendor/nouislider.js";
const slider = document.getElementById("slider");

if (slider) {
  noUiSlider.create(slider, {
    start: [500, 10000],
    connect: true,
    step: 100,
    range: {
      min: [500],
      max: [10000],
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  // handle - пердает либо 0 либо 1
  // value - пердает либо 0 либо 1
  slider.noUiSlider.on("update", function (values, handle) {
    // если мы двигаем первую полоску - управляй первым инпутом
    // если мы двигаем вторую полоску - управляй вторым инпутом
    inputs[handle].value = Math.round(values[handle]);
  });

  // связь между инпутом и слайдером (ввод в инпут)
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
