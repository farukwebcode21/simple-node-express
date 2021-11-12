const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello I am learning node ');
})
const users = [
    {
        id: 0,
        name: "Sabana",
        email: "sabana@gmail.com",
        phone: '00146545576',
    },
    {
        id: 1,
        name: "Salma",
        email: "salma@gmail.com",
        phone: '00146546076',
    },
    {
        id: 2,
        name: "Sumi",
        email: "sumi@gmail.com",
        phone: '001465465788',
    },
    {
        id: 3,
        name: "Srabonti",
        email: "srabonti@gmail.com",
        phone: '00146546886',
    },
    {
        id: 4,
        name: "Sabnur",
        email: "sabnur@gmail.com",
        phone: '00146544576',
    },
    {
        id: 5,
        name: "Sonia",
        emai: "sonia@gmail.com",
        phone: '00146546500',
    },
]
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
         res.send(users);
    }
})
// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.send(JSON.stringify(newUser));
    // res.json(newUser);
})
app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user =users[id]
    res.send(user);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka faxil');
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple']);
} )


app.listen(port, () => {
    console.log('Listening to port', port);
})