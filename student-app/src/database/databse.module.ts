import { Module } from "@nestjs/common";
import { DatabaseService } from "./databse.service";

@Module({

    providers: [DatabaseService],
    exports:[DatabaseService]
})
export class DatabaseModule{}