declare const artifacts: any;
declare const web3: any;
const AmiraliCoin = artifacts.require('./AmiraliCoin.sol');

import express, {
    Request,
    Response,
    NextFunction
} from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Welcome!');
});

export default function(callback: Function): void {
    AmiraliCoin.deployed().then(function(instance: any) {
        console.log('Connected to Blockchain Successfully!');
    })
    .then(function(value: any) {
        app.listen(4000, (err: any) => {
            console.log('Server is listening on port 4000 ...');
        });
    });
}