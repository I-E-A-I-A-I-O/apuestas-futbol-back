import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/hola', (req: Request, response: Response) => {
    response.status(200).json({content: 'jejejejej'})
});