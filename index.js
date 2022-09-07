const btn = document.getElementById("liftBtn")
const image = document.getElementById("img")
let count = 0

btn.addEventListener("click", () => {
    count ++;
    console.log(count);
    image.src = `images/${count}.gif`
    if (count > 5) {
        return count = 0
    }
})
