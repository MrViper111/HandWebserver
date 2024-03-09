from website.account import Account


account = Account(
    name="David Sachmanyan",
    email="dsachmanyan25@lasallehs.org",
    password="password",
    admin=False
)

account1 = Account.get_account("David Sachmanyan")
print(account1.email)
