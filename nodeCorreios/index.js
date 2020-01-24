const express = require('express');
const cors = require('cors');
const trackingCor = require('tracking-correios');

const app = express();
app.use(cors());

const port = 3001;

const get = (obj, path, fallback =null) =>{
  const pathKeys = (typeof path === 'string') ? path.split('.'): [];
  const result = pathKeys.reduce((value, key) => value && value[key], obj);
  return result || fallback;
};


app.get('/', (req, res) =>{
  const tracking = get(req, 'query.tracking');

  trackingCor.track(tracking)
    .then((result)=>{
      const events = get(result, '0.evento');
      res.json({message: 'Ok!', tracking, events});
    })
    .catch((error) =>{
      res.json({messgae: 'error', error})
    })

});

app.listen(port, ()=> {
  return console.log(`Salve da porta ${port}`);
})