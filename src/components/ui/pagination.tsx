// import * as React from "react";
// import {
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   DotsHorizontalIcon,
// } from "@radix-ui/react-icons";

// import { cn } from "@/lib/utils";
// import { ButtonProps, buttonVariants } from "@/components/ui/button";

// const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
//   <nav
//     role="navigation"
//     aria-label="pagination"
//     className={cn("mx-auto flex w-full justify-center", className)}
//     {...props}
//   />
// );
// Pagination.displayName = "Pagination";

// const PaginationContent = React.forwardRef<
//   HTMLUListElement,
//   React.ComponentProps<"ul">
// >(({ className, ...props }, ref) => (
//   <ul
//     ref={ref}
//     className={cn("flex flex-row items-center gap-1", className)}
//     {...props}
//   />
// ));
// PaginationContent.displayName = "PaginationContent";

// const PaginationItem = React.forwardRef<
//   HTMLLIElement,
//   React.ComponentProps<"li">
// >(({ className, ...props }, ref) => (
//   <li ref={ref} className={cn("", className)} {...props} />
// ));
// PaginationItem.displayName = "PaginationItem";

// type PaginationLinkProps = {
//   isActive?: boolean;
// } & Pick<ButtonProps, "size"> &
//   React.ComponentProps<"a">;

// const PaginationLink = ({
//   className,
//   isActive,
//   size = "icon",
//   ...props
// }: PaginationLinkProps) => (
//   <a
//     aria-current={isActive ? "page" : undefined}
//     className={cn(
//       buttonVariants({
//         variant: isActive ? "outline" : "ghost",
//         size,
//       }),
//       isActive && "bg-black/5 shadow-none border-none text-black!",
//       className
//     )}
//     {...props}
//   />
// );
// PaginationLink.displayName = "PaginationLink";

// const PaginationPrevious = ({
//   className,
//   ...props
// }: React.ComponentProps<typeof PaginationLink>) => (
//   <PaginationLink
//     aria-label="Go to previous page"
//     size="default"
//     className={cn("gap-1 px-2.5 xs:pl-2.5", className)}
//     {...props}
//   >
//     <ArrowLeftIcon className="h-4 w-4 hidden xs:block" />
//     <span className="xs:ml-2">Previous</span>
//   </PaginationLink>
// );
// PaginationPrevious.displayName = "PaginationPrevious";

// const PaginationNext = ({
//   className,
//   ...props
// }: React.ComponentProps<typeof PaginationLink>) => (
//   <PaginationLink
//     aria-label="Go to next page"
//     size="default"
//     className={cn("gap-1 px-2.5 xs:pr-2.5", className)}
//     {...props}
//   >
//     <span className="xs:mr-2">Next</span>
//     <ArrowRightIcon className="h-4 w-4 hidden xs:block" />
//   </PaginationLink>
// );
// PaginationNext.displayName = "PaginationNext";

// const PaginationEllipsis = ({
//   className,
//   ...props
// }: React.ComponentProps<"span">) => (
//   <span
//     aria-hidden
//     className={cn("flex h-9 w-9 items-center justify-center", className)}
//     {...props}
//   >
//     <DotsHorizontalIcon className="h-4 w-4" />
//     <span className="sr-only">More pages</span>
//   </span>
// );
// PaginationEllipsis.displayName = "PaginationEllipsis";

// export {
//   Pagination,
//   PaginationContent,
//   PaginationLink,
//   PaginationItem,
//   PaginationPrevious,
//   PaginationNext,
//   PaginationEllipsis,
// };

import * as React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(
      "mx-auto flex w-full items-center justify-center overflow-x-auto",
      className
    )}
    {...props}
  />
);

Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-wrap items-center justify-center gap-1",
      className
    )}
    {...props}
  />
));

PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(className)} {...props} />
));

PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      "h-8 w-8 sm:h-9 sm:w-9 text-sm",
      isActive && "bg-black/5 shadow-none border-none text-black",
      className
    )}
    {...props}
  />
);

PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(
      "gap-1 px-2 sm:px-2.5 text-xs sm:text-sm w-auto",
      className
    )}
    {...props}
  >
    <ArrowLeftIcon className="h-4 w-4 hidden xs:block" />
    <span>Prev</span>
  </PaginationLink>
);

PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn(
      "gap-1 px-2 sm:px-2.5 text-xs sm:text-sm w-auto",
      className
    )}
    {...props}
  >
    <span>Next</span>
    <ArrowRightIcon className="h-4 w-4 hidden xs:block" />
  </PaginationLink>
);

PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center",
      className
    )}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

PaginationEllipsis.displayName = "PaginationEllipsis";

type PaginationWrapperProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationWrapper = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationWrapperProps) => {
  const generatePages = () => {
    const pages: (number | string)[] = [];

    // always show first page
    pages.push(1);

    // show left ellipsis
    if (currentPage > 3) {
      pages.push("left-ellipsis");
    }

    // middle pages (max 3)
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // right ellipsis
    if (currentPage < totalPages - 2) {
      pages.push("right-ellipsis");
    }

    // always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return [...new Set(pages)];
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();

              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>

        {/* Pages */}
        {generatePages().map((page, index) => {
          if (
            page === "left-ellipsis" ||
            page === "right-ellipsis"
          ) {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(Number(page));
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();

              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationWrapper,
};