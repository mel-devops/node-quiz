const { Carousel } = require('bootstrap');
const express = require('express');
const path = require('path');
const PORT = 8080;add

const app = express();
// parses JSON from incoming request
app.use(express.json());

// Do not edit
const options = {
  lemon:  'yellow',
  lime: 'limegreen',
  tangerine: 'orange',
  grapefruit: 'lightcoral'
};

// #3 helper function 'getColor`
const getColor = (fruit) => {
  return options[fruit];
}

// #1 serve the colors.html page when /colors is visited
// DO NOT USE express.static
app.get('/colors', () => {
  res.status(200).sendFile(path.join(_dirname, './client/colors.html'));
  
});

// #2 & #4 handle POST requests to /colors
app.post('/colors', () => {
  const {fruit} = req.body;
  const color = getColor(fruit);
  
  if (color) {
    res.status(200).send({color});
  }else {
    res.status(404).send({message: 'Invalid Color'});
  }
  
});

// #6 serve styles.css - DO NOT use express.static()
app.get('/styles.css', () => {
  res.status(200).sendFile(path.join)(__dirname, '/client/styles.css'));

});

// #5 Update functionality to database
app.put('/colors/:id/:fruit', () => {
  const {id, fruit} = req.params;
  console.log(fruit)
  const color = getColor(fruit);

  const [rows] = await.pool.execute(
    UPDATE cars
    SET color = ?
    WHERE car_id = ?
    [color, id]
  );

  console.log (rows)
  res.status(200).send(rows[0]); } 
  catch (error) {
  console.error(error);
  res.status(500).send('Error updating');

});


// #7 unknown routes - 404 handler
// research what route to serve this for
app.get('/*', async(req, res) => {
  res.status(404).sendFile(path.join(__dirname, './client/404.html'))
})

// Global error handling middleware
// You can leave this alone
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
