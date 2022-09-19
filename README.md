This is my personal portfolio website /n/n

tech used: /n
express, node.js  -  backend /n
react  -  frontend /n
boostrap - CSS framework and styling /n
GSAP - animations /n

app breakdown
server.js  -  the backend that hosts the website online
  relevant package-lock and .gitignore files

/client  -  the clientside package that gets sent
  relevant package-lock and .gitignore files

/client/src   -   where most the javascript that builds the website resides
  app.js   -  contains the logic for what page renders and is the main parent body of the website
  style.css  -  covers custom css not in bootstrap
  /pages  -  the main bodies for each part of the website
  /components  -  parts of the website that repeat, (buttons, navigation bar, portfolio cards)
  GitList.js  -  json file that allows easy edit to ./pages/portfolio.js project information
  Resume.PDF  -  displayed in ./pages/resume.js

/client/public
  the main HTML, metadata, and icons
    then the javascript code takes over and creates the website
