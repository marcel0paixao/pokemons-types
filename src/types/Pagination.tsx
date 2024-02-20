export default interface Pagination {
    actualPage: number,
    totalPages: number,
    nextPage: number,
    previousPage: number,
    totalItems: number,
    itemsPerPage: number
}