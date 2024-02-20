import type Pagination from '../types/Pagination';

interface Props {
    pagination: Pagination;
    setPagination: (pagination: Pagination) => void;
}

export default function Pagination({pagination, setPagination}: Props) {
  return (
    <div className="flex justify-center mt-8">
        <button
            className="bg-purple-400 text-white px-4 py-2 rounded-none rounded-l-md"
            onClick={() => setPagination({ ...pagination, actualPage: pagination.actualPage - 1 })}
            disabled={pagination.actualPage === 1}>
            &lt;
        </button>

        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1).map((page) => (
        <button
            key={page}
            className={`bg-purple-400 text-white px-3 py-2 w-12 rounded-none focus:outline-none md:block hidden focus:!border-none ${pagination.actualPage === page ? 'bg-purple-600' : ''}`}
            onClick={() => setPagination({ ...pagination, actualPage: page })}
        >
            <span className="text-center">{page}</span>
        </button>
        ))}

        <button
            className="bg-purple-400 text-white px-4 py-2 rounded-none rounded-r-md"
            onClick={() => setPagination({ ...pagination, actualPage: pagination.actualPage + 1 })}
            disabled={pagination.actualPage === pagination.totalPages}>
            &gt;
        </button>
        <span className="mx-4 mt-2">{pagination.actualPage} / {pagination.totalPages}</span>
    </div>
  )
}