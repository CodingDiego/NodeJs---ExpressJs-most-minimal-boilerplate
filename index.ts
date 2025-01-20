// src/index.ts
import path from 'path'
import express, { Request, Response } from 'express';
import axios from 'axios';
import cookieParser from 'cookie-parser';


const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para realizar el inicio de sesión
app.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Realiza la solicitud POST al servidor de inicio de sesión
        const loginResponse = await axios.post('https://sv21.minehost.com.ar/index.php?r=site/login', {
            'LoginForm[name]': username,
            'LoginForm[password]': password,
        }, {
            withCredentials: true, // Importante para manejar las cookies
        });

        // Aquí puedes procesar la respuesta del servidor después del inicio de sesión
        console.log('Respuesta del servidor después del inicio de sesión:', loginResponse.data);

        // Realiza la siguiente solicitud (por ejemplo, GET) a la próxima URL que deseas manejar
        const nextUrl = 'https://sv21.minehost.com.ar/index.php?r=server/view&id=1330';
        const nextResponse = await axios.get(nextUrl, {
            withCredentials: true, // Las cookies se enviarán automáticamente
        });

        // Aquí puedes procesar el HTML de la siguiente página según tus necesidades
        const nextHtml = nextResponse.data;
        console.log('HTML de la siguiente página:', nextHtml);

        // Envía la respuesta al cliente
        res.send(nextHtml);
    } catch (error) {
        console.error('Error al manejar la solicitud:', error);
        res.status(500).send('Error al manejar la solicitud');
    }
});

app.get('/mi-vista', (req: Request, res: Response) => {
    // Aquí puedes procesar la respuesta del inicio de sesión y obtener el HTML
    const loginResponseHtml = '<p>HTML de la respuesta del inicio de sesión</p>'; // Reemplaza con el HTML real

    // Renderiza la vista mi_vista.ejs con el HTML de la respuesta del inicio de sesión
    res.render('mi_vista', { loginResponseHtml });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
