let notify = document.getElementById('notification');
let success = `<i class="fa-solid fa-circle-check"></i> Successfully Completed!`;
let error = `<i class="fa-solid fa-circle-exclamation"></i> An error occured!`;
let invalid = ` <i class="fa-solid fa-circle-xmark"></i> Input is invalid`;


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    notify.appendChild(toast);

    if(msg.includes(error)) {
        toast.classList.add("error")
    }
    if(msg.includes(invalid)) {
        toast.classList.add("invalid")
    }

    setTimeout(() => {
        toast.remove();
    }, 6000)

}