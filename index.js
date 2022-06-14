const wrapper = document.getElementById("wrapper");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const radius =["25%","50%", "70%"]
const transform = ["translateX(500%,)", "translateX(200%)", "translatey(90%)", "translatey(300%)"]
const scale = ["scale(5)", "scale(0.5)", "scale(2.0)", "scale(1.75)"]
const duration = [100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]
const delay = [100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]

for (let i = 1; i < 500; i++) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  wrapper.appendChild(circle);
  circle.addEventListener("mouseover", () => setColor(circle));
}

function setColor (element){
 const color = getRandomColors();
 const radius = getRandomRadius();
 const transform = getRandomTransform();
 const duration = getRandomDuration();
 const delay = getRandomDelay();
 const scale = getRandomScale();
 element.style.background=color;
 element.style.borderRadius=radius;
 element.style.transform=transform;
 element.style.transitionDuration=duration;
 element.style.transitionDelay=delay;
 element.style.scale=scale;
 loop = true,
 direction= "alternate",
 easing = "easeOutExpo"
}

function getRandomColors() {
    return colors[Math.floor(Math.random() * colors.length)]
}
function getRandomRadius() {
    return radius[Math.floor(Math.random() * radius.length)]
}
function getRandomTransform() {
    return transform[Math.floor(Math.random() * transform.length)]
}
function getRandomDuration() {
    return duration[Math.floor(Math.random() * duration.length)]
}
function getRandomDelay() {
    return delay[Math.floor(Math.random() * delay.length)]
}
function getRandomScale() {
    return scale[Math.random() * scale.length]
}
