from flask import Flask, render_template_string, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    # header | side bar | description| styling | projects - category | live link | updates - currently | contact me
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/footer')
def footer():
    return render_template_string("""
                                 <footer>Contact me: <a href="mailto:
        <p>&copy; 2024 Your Name. All rights reserved.</p>""")
    
if __name__ == '__main__':
    app.run(debug=True)    