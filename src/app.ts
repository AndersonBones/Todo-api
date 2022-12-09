import express,{Request, Response} from 'express'
import dotenv from 'dotenv'
import path from 'path';
import indexRoutes from './routes/index'


const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));



app.use(indexRoutes);

app.listen(process.env.PORT);

