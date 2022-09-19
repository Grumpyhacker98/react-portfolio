This is my personal portfolio website <br /><br />

**tech used:** <br />
express, node.js  -  backend <br />
react  -  frontend <br />
boostrap - CSS framework and styling <br />
GSAP - animations <br /><br />

**app breakdown** <br /><br />
server.js  -  the backend that hosts the website online <br />
  * relevant package-lock and .gitignore files <br /><br />

/client  -  the clientside package that gets sent <br />
  * relevant package-lock and .gitignore files <br /><br />

/client/src   -   where most the javascript that builds the website resides <br />
  * app.js   -  contains the logic for what page renders and is the main parent body of the website <br />
  * style.css  -  covers custom css not in bootstrap <br />
  * /pages  -  the main bodies for each part of the website <br />
  * /components  -  parts of the website that repeat, (buttons, navigation bar, portfolio cards) <br />
  * GitList.js  -  json file that allows easy edit to ./pages/portfolio.js project information <br />
  * Resume.PDF  -  displayed in ./pages/resume.js <br /> <br />

/client/public <br />
  * the main HTML, metadata, and icons <br />
    * then the javascript code inside /src takes over and creates the website <br />
