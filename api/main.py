try:
    from api.website import createApp
except:
    from website import createApp


app = createApp()

if __name__ == "__main__":
    print("Starting website...")
    app.run(debug=True, port=8000)
    print()