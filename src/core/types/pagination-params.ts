import { Min } from 'class-validator'

class PaginationParams {
    @Min(0)
    pageSize: number

    @Min(0)
    page: number
}

export default PaginationParams
