from flask_login import UserMixin


class User(UserMixin):
    # proxy for a database of users
    user_database = {
        "phuongnam": ("phuongnam", "123"),
        "thiennhan": ("thiennhan", "qwerty")
    }

    def __init__(self, username, password):
        self.id = username
        self.password = password

    @classmethod
    def get(cls, id):
        return cls.user_database.get(id)
