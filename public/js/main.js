const childAppOptions = {
    uuid:"childApp",
    name: "childApp",
    url: "https://boring-einstein-340ab6.netlify.app/?test=Hello_world!",
    autoShow: true,
};

async function hide() {
    try {
        const win = fin.Window.wrapSync(childAppOptions);
        if (await win.isShowing()) {
            await win.hide();
        } else {
            await win.show();
        }
    } catch (err) {
        console.error(err);
    }
}

async function navigate() {
    try {
        const win = fin.Window.wrapSync(childAppOptions);
        var num = Math.floor(Math.random() * 1000000);
        document.querySelector("#number-pr").innerHTML = num;
        //we could use the native window functions but I want to 1:1 compare.
        win.navigate(`https://boring-einstein-340ab6.netlify.app/?test=${num}`);
    } catch (err) {
        console.error(err)
    }

}

window.addEventListener('DOMContentLoaded', async () => {
   //let's launch our child app.
    try {
        return fin.Application.start(childAppOptions);
    } catch (err) {
        console.error(err);
    }
});