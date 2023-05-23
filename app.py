from flask import Flask, Request, url_for, redirect, message_flashed, render_template


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route("/pokemon/<name>")
def pokemon(name):
    pokemon = name
    return render_template('pokemon.html', pokemon = pokemon)


app.run(debug=True)