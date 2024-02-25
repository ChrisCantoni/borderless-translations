import React from 'react';
import {Paper, Box} from "@mui/material/";
import './InfoPage.css';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h3>Info Page</h3>
      <p>This website was built by the Prime Digital Academy Taaffeite Cohort Borderless Translations team.</p>

      <h4>Technologies used to build this website include:</h4>
      <div className="infoCard">
      <Box sx={{maxWidth: 700, display: 'flex', flexGrow: 1, flexWrap: 'wrap', flexDirection: 'row', 
      textAlign: 'center', justifyContent: 'space-around', alignContent: 'space-between'}}>
        <Paper className="infoPaper" sx={{flexDirection: "column"}}><h5>Javascript</h5><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>React</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>Redux</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>Passport</h5><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Passportjs.svg/240px-Passportjs.svg.png" alt="PassportJS" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>Material UI</h5> <img src="https://v4.mui.com/static/logo.png" alt="Material UI" width="40" height="40" /></Paper>
        <Paper className="infoPaper"><h5>Node.js</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>Express.js</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>PostgreSQL</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>HTML</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></Paper>
        <Paper className="infoPaper"><h5>CSS</h5> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></Paper>

        </Box>
        </div>
    </div>
  );
}

export default InfoPage;
