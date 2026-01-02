function changeText() {
    document.getElementById("message").innerHTML =
        "✅ You interacted with the website!";
}

function changeColor() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightyellow"
        ? "#eef2f7"
        : "lightyellow";
}

function showName() {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name");
    } else {
        document.getElementById("output").innerHTML =
            "Hello, <b>" + name + "</b> 👋 Welcome to Cloud!";
    }
}
