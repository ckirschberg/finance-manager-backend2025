import { Category } from "../../categories/entities/category.entity"

export class CreateEntryDto {
    id: number

    amount: number

    date: Date

    currency: string

    name: string

    comment: string

    description: string

    category: Category
}
