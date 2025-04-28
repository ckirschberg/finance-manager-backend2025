import { ApiProperty } from "@nestjs/swagger";
import { Category } from "../../categories/entities/category.entity"

export class CreateEntryDto {
    
    @ApiProperty({ example: 'Pizza', description: 'The title of the entry' })
    title: string

    @ApiProperty({ example: 98, description: 'The price paid for the entry' })
    amount: number

    @ApiProperty({ type: () => Category, description: 'The category of the entry' })
    category: Category

    @ApiProperty({ description: 'An optional photo' })
    photo: any;
}
