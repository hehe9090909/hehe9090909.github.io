const input_1 = document.getElementById("in1")
const output_1 = document.getElementById("out1")
const output_2 = document.getElementById("out2")
const generate_1 = document.getElementById("gen1")
const copy_1 = document.getElementById("copy1")
generate_1.addEventListener("click", () => {
    output_1.style.backgroundColor = input_1.value
    output_2.innerText = input_1.value
})
copy_1.addEventListener("click", () => {
navigator.clipboard.writeText(input_1.value)
})