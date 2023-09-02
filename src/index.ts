import {createConnection} from 'typeorm'

const main = async () => {
    try {
        await createConnection({
            type:"postgres",
            host:"localhost",
            port:5432,
            username:"",
            password:undefined,
            database:"typeorm"
        });

        console.log('Connected to typeorm database');

    } catch (error) {
        console.log(error);
        console.log("Can not connect to typeorm database");
    }
}

main();