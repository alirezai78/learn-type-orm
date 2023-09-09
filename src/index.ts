import { DataSource } from 'typeorm'
import { Client } from './entities/Client';
import { Banker } from './entities/Banker';

const main = async () => {
    try {

        const connection = new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "123456",
            database: "typeorm",
            entities: [Client, Banker],
            synchronize: true
        });

        connection.initialize();

        console.log('Connected to typeorm database');

    } catch (error) {
        console.log(error);
        console.log("Can not connect to typeorm database");
    }
}

main();