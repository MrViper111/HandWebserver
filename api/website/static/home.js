
window.onload = function() {
    console.log("Loading and displaying blog posts...");
    displayBlogs();
}

async function getBlogData() {
    const response = await fetch("api/blog/getposts")
    const data = await response.json()

    return data.reverse(); // note: reverses the order of the data (flips the list)
}

async function displayBlogs() {
    try {
        var blogs = await getBlogData();
    } catch (error) {
        console.error("Error fetching blog data: ", error);
    }

    for (let i = 0; i < blogs.length; i++) {
        var blog = blogs[i];

        var container = document.createElement("div");
        container.id = "container1";

        var titleContainer = document.createElement("span");

        var title = document.createElement("span");
        title.id = "title"
        title.textContent = blog.title;

        var date = document.createElement("span");
        date.id = "date"
        date.textContent = blog.date;

        var line1 = document.createElement("hr");
    
        var content = document.createElement("p");
        content.textContent = blog.content;

        var line2 = document.createElement("hr");

        var id = document.createElement("span");
        id.id = "blogID";
        id.textContent = "ID: " + blog.id;

        titleContainer.appendChild(title);
        titleContainer.appendChild(date);

        container.appendChild(titleContainer);
        container.appendChild(line1);
        container.appendChild(content);
        container.appendChild(line2);
        container.appendChild(id);

        document.body.appendChild(container);
    }

}
