
function createBlog() {
    title = document.getElementById("title-textbox").value;
    content = document.getElementById("content-textbox").value;

    if (title === "" || content === "") {
        alert("Please enter a title and content for the blog post.");
        return;
    }


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/blog/addpost/?title=" + title + "&content=" + content);
    xhr.send();

    alert("Successfully uploaded blog post!\n\nTitle: " + title + "\nContent: " + content);
}

async function deleteBlog() {
    id = document.getElementById("id-textbox").value;

    if (id === "") {
        alert("Please enter a post ID.");
        return;
    }

    const response = await fetch("api/blog/getpost/?id=" + id);
    const data = await response.json();

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/blog/removepost/?id=" + id);
    xhr.send();

    alert("Successfully removed blog post!\n\nID: " + id + "\nTitle: " + data.title);
}
 