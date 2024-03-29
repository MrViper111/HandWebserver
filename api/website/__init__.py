import os
from flask import Flask
from .views import views


def createApp():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
    app.register_blueprint(views, url_prefix="/")

    return app
