import { IsString, Length } from "class-validator";

export class oid {
    @IsString() @Length(24,24) oid: string;
}