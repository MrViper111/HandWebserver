import json
import os
import datetime
import random

from flask import Blueprint, render_template, request
from functools import update_wrapper, wraps


views = Blueprint("views", __name__)


@views.route("/")
def home():
    return render_template("realhome.html")

@views.route("/aman")
def aman():
    return render_template("aman.html")

@views.route("/irl")
def irl_home():
    acode = request.args.get("acode")

    if acode != "733901":
        return "Access denied - Password required"

    return render_template("irl_home.html")

@views.route("/carlowhome")
def carlow_home():
    return render_template("home.html")

@views.route("/carloweditor")
def carlow_blog_editor():
    return render_template("blog_editor.html")


@views.route("/pizzabot/panel")
def pizzapanel():
    return render_template("botpanel.html")

@views.route("/pizzabot/panel/logs")
def pizzapannel_logs():
    return render_template("botpanel_logs.html")

@views.route("/pizzabot/panel/ranks")
def pizzapannel_ranks():
    return render_template("botpanel_ranks.html")

@views.route("/pizzabot/panel/config")
def pizzapannel_config():
    return render_template("botpanel_config.html")

@views.route("/pizzabot/panel/logs/raw")
def pizzapannel_logs_raw():
    return render_template("botpanel_logs.html")


@views.route("api/blog/getpost/")
def get_post():
    id = request.args.get("id")

    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "blogs.json"), "r+") as file:
        data: list = json.load(file)

        for post in data:
            if post["id"] == id:
                return post
            
        return "Failure"



@views.route("api/blog/addpost/")
def add_post():
    title = request.args.get("title")
    content = request.args.get("content")

    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "blogs.json"), "r+") as file:
        data: list = json.load(file)
        id = str(random.randint(11111111, 99999999))

        while id in str(data):
            id = random.randint(11111111, 99999999)

        data.append(
            {
                "title": title,
                "content": content,
                "date": str(datetime.datetime.now().strftime("%B %d, %Y")),
                "id": id
            }
        )

        file.seek(0)
        file.truncate()

        json.dump(
            data,
            file,
            indent=4,
            separators=(",", ": ")
        )

    return "Success"


@views.route("api/blog/removepost/")
def remove_post():
    id = str(request.args.get("id"))

    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "blogs.json"), "r+") as file:
        data: list = json.load(file)

        for i, blog in enumerate(data):

            if blog["id"] == id:
                data.pop(i)

                file.seek(0)
                file.truncate()

                json.dump(
                    data,
                    file,
                    indent=4,
                    separators=(",", ": ")
                )

                return "Success"
            
        return "Failure"


@views.route("api/blog/getposts")
def get_posts():
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "blogs.json"), "r+") as file:
        data = json.load(file)

    return data



@views.route("api/robotichand/setcertainty/")
def set_certainty():
    value = request.args.get("value")

    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "neurocity_data.json"), "r+") as file:
        data: list = json.load(file)

        data["certainty"] = value

        file.seek(0)
        file.truncate()

        json.dump(
            data,
            file,
            indent=4,
            separators=(",", ": ")
        )

    return "Success"


@views.route("api/robotichand/getcertainty")
def get_certainty():
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "neurocity_data.json"), "r+") as file:
        data = json.load(file)

    return data


# now make a thing that can automatically do all the shit I want
# basically do the thing
