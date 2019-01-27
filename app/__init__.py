from flask import Flask, Blueprint
from flask_login import LoginManager
from . import views
from .models import User

app = Flask(__name__)
app.secret_key = 'super secret string'  # Change this!

login_manager = LoginManager()


@login_manager.user_loader
def load_user(user_id):
    user_entry = User.get(user_id)
    return User(*user_entry)


login_manager.init_app(app)
app.register_blueprint(views.bp)

from app import views # noqa
