import MuiPagination from '@mui/material/Pagination'

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <MuiPagination
      sx={{
        py: 8,
        display: 'flex',
        justifyContent: 'center'
      }}
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      size="large"
    />
  );
};

export default PaginationComponent;
