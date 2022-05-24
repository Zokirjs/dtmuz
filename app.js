const path = require('path');
const express = require('express');
const app = express();
const User = require('./user.js');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

const parseXlsx = require('excel');
app.get('/', (req, res) => {
  res.render('index');
});
app.post('/answers', (req, res) => {
  parseXlsx.default('./public/5.xlsx', '1').then((data) => {
    let clinet = data.find((el) => el[0] == req.body.id);
    if (clinet) {
      let json = new User(clinet);
      res.render('answers', {
        data: json,
      });
      return;
    } else {
      parseXlsx.default('./public/6.xlsx', '1').then((data) => {
        let clinet = data.find((el) => el[0] == req.body.id);
        if (clinet) {
          let json = new User(clinet);
          console.log(json);
          res.render('answers', {
            data: json,
          });
          return;
        } else {
          parseXlsx.default('./public/7.xlsx', '1').then((data) => {
            let clinet = data.find((el) => el[0] == req.body.id);
            if (clinet) {
              let json = new User(clinet);
              res.render('answers', {
                data: json,
              });
              return;
            } else {
              parseXlsx.default('./public/8.xlsx', '1').then((data) => {
                let clinet = data.find((el) => el[0] == req.body.id);
                if (clinet) {
                  let json = new User(clinet);
                  res.render('answers', {
                    data: json,
                  });
                  return;
                } else {
                  parseXlsx.default('./public/9.xlsx', '1').then((data) => {
                    let clinet = data.find((el) => el[0] == req.body.id);
                    if (clinet) {
                      let json = new User(clinet);
                      res.render('answers', {
                        data: json,
                      });
                      return;
                    } else {
                      parseXlsx
                        .default('./public/10.xlsx', '1')
                        .then((data) => {
                          let clinet = data.find((el) => el[0] == req.body.id);
                          if (clinet) {
                            let json = new User(clinet);
                            res.render('answers', {
                              data: json,
                            });
                            return;
                          } else {
                            parseXlsx
                              .default('./public/11.xlsx', '1')
                              .then((data) => {
                                let clinet = data.find(
                                  (el) => el[0] == req.body.id
                                );
                                if (clinet) {
                                  let json = new User(clinet);
                                  res.render('answers', {
                                    data: json,
                                  });
                                  return;
                                }
                              });
                          }
                        });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});

app.get('/img', (req, res) => {
  res.sendFile('D:dtmpublicimg11605049.png');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
