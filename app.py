from flask import Flask, render_template, url_for
import requests

app = Flask(__name__)

@app.route('/')
def home():
    # header | side bar | description| styling | projects - category | live link | updates - currently | contact me
    return render_template('index.html', active='home')

@app.route('/projects')
def projects():
    return render_template('projects.html', active='projects')

@app.route('/contact')
def contact():
    return render_template("contact.html", active='contact')

@app.route('/footer')
def footer():
    return render_template('footer.html') 
    
if __name__ == '__main__':
    app.run(debug=True)    