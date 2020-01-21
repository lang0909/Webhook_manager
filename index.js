let express = require('express');
let bodyParser = require('body-parser');
let spawn = require('child_process').spawn;
let crypto = require('crypto');
let app = express();

app.use(bodyParser.json());

let secret = "940909";
let port = 8000;

app.post('/server', (req, res) => {
    console.log('[LOG] request server modify received');
    res.status(400).set('Content-Type', 'application/json');

    let jsonString = JSON.stringify(req.body);
    let hash = "sha1=" + crypto.createHmac('sha1', secret).update(jsonString).digest('hex');

    if (hash != req.get('x-hub-signature')) {
        console.log('[ERROR] invalid key');
        let data = JSON.stringify({ "error": "invalid key", key: hash });
        return res.end(data);
    }

    console.log("[LOG] running server_pull.sh");

    let deploySh = spawn('sh', ['server_pull.sh']);
    deploySh.stdout.on('data', function (data) {
        let buff = new Buffer(data);
        console.log(buff.toString('utf-8'));
    });

    let data = JSON.stringify({ "success": true });
    console.log('[LOG] success!!');
    return res.status(200).end(data);
});

app.post('/data', (req, res) => {
    console.log('[LOG] request data modify received');
    res.status(400).set('Content-Type', 'application/json');

    let jsonString = JSON.stringify(req.body);
    let hash = "sha1=" + crypto.createHmac('sha1', secret).update(jsonString).digest('hex');

    if (hash != req.get('x-hub-signature')) {
        console.log('[ERROR] invalid key');
        let data = JSON.stringify({ "error": "invalid key", key: hash });
        return res.end(data);
    }

    console.log("[LOG] running data_pull.sh");

    let deploySh = spawn('sh', ['data_pull.sh']);
    deploySh.stdout.on('data', function (data) {
        let buff = new Buffer(data);
        console.log(buff.toString('utf-8'));
    });

    let data = JSON.stringify({ "success": true });
    console.log('[LOG] success!!');
    return res.status(200).end(data);
});

app.post('/image', (req, res) => {
    console.log('[LOG] request image modify received');
    res.status(400).set('Content-Type', 'application/json');

    let jsonString = JSON.stringify(req.body);
    let hash = "sha1=" + crypto.createHmac('sha1', secret).update(jsonString).digest('hex');

    if (hash != req.get('x-hub-signature')) {
        console.log('[ERROR] invalid key');
        let data = JSON.stringify({ "error": "invalid key", key: hash });
        return res.end(data);
    }

    console.log("[LOG] running image_pull.sh");

    let deploySh = spawn('sh', ['image_pull.sh']);
    deploySh.stdout.on('data', function (data) {
        let buff = new Buffer(data);
        console.log(buff.toString('utf-8'));
    });

    let data = JSON.stringify({ "success": true });
    console.log('[LOG] success!!');
    return res.status(200).end(data);
});

app.listen(port, () => console.log('listen to ' + port + ' port'));
