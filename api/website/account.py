from __future__ import annotations
import os
import json


class Account:
    name: str
    email: str
    password: str
    admin: bool

    def __init__(self, name, email, password, admin):
        self.name = name
        self.email = email
        self.password = password
        self.admin = admin

    @staticmethod
    def get_account(name: str) -> 'Account':
        with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "accounts.json"), "r+") as file:
            data: list = json.load(file)

        for account in data:
            if name == account["name"]: 
                return __class__(name, account["email"], account["password"], account["admin"]) 
            
        