const experiences = document.querySelectorAll(".experience");

experiences.forEach((experience, index) => {
  anime({
    targets: experience,
    opacity: [0, 1],
    translateY: [50, 0],
    delay: index * 200,
    easing: "easeInOutQuad"
  });
});
