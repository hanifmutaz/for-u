const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, I lovee uu moreee hehehe";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("mousemove", (e) => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    const buffer = 50; // jarak minimum antara tombol dan kursor
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Hitung posisi baru tombol untuk menghindari kursor
    let newLeft = noBtnRect.left + (noBtnRect.left - mouseX > 0 ? buffer : -buffer);
    let newTop = noBtnRect.top + (noBtnRect.top - mouseY > 0 ? buffer : -buffer);

    // Pastikan tombol tetap berada dalam batas wrapper
    newLeft = Math.max(wrapperRect.left, Math.min(wrapperRect.right - noBtnRect.width, newLeft));
    newTop = Math.max(wrapperRect.top, Math.min(wrapperRect.bottom - noBtnRect.height, newTop));

    // Ubah posisi relatif terhadap wrapper, bukan viewport
    noBtn.style.position = "absolute";
    noBtn.style.left = newLeft - wrapperRect.left + "px";
    noBtn.style.top = newTop - wrapperRect.top + "px";
});
