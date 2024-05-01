"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type QueryPaginationProps = {
  totalPages: number;
  className?: string;
};

const QueryPagination = ({ totalPages, className }: QueryPaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <Pagination className={className}>
      <PaginationContent>
        {previousPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(previousPage)} />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill("")
          .map((_, i) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page-button-${i + 1}`}
            >
              <PaginationLink
                isActive={currentPage === i + 1}
                href={createPageUrl(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageUrl(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default QueryPagination;
