# Automatically opens the NASA image of the day in Chrome
import requests
import webbrowser

response = requests.get("https://api.nasa.gov/planetary/apod?api_key=eVTqFnElSp1SbdFPsOA3us3IgAxEEYuybqnyMUZh")

file = open("Image of the day.html", "w")
file.write("<html>\n    <img src=\"")
file.write(response.json()['hdurl'])
file.write("\">\n</html>")
file.close()


url = "C:/Users/jhtra/Documents/GitHub/Webpage-with-Node/Image of the day.html"
chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'

webbrowser.get(chrome_path).open(url)