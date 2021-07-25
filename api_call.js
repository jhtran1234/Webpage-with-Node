fetch('https://api.nasa.gov/planetary/apod?api_key=eVTqFnElSp1SbdFPsOA3us3IgAxEEYuybqnyMUZh')
  .then(response => response.json())
  .then(data => console.log(data));