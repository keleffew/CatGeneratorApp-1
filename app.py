import os
from flask import Flask, render_template
import requests

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY") or "a secret key"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_cat')
def get_cat():
    api_url = "https://api.thecatapi.com/v1/images/search"
    response = requests.get(api_url)
    if response.status_code == 200:
        cat_data = response.json()[0]
        return cat_data['url']
    else:
        return "Error fetching cat image", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
