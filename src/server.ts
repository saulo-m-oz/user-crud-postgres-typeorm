import app from "./app";
import {AppDataSource} from "./data-source";

async function init(){
    const PORT = process.env.PORT || 3000;
    await AppDataSource.initialize();
    app.listen(PORT, ()=> console.log(`Inicializado em: http://localhost:${PORT}`));
}

init();