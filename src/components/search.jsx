import PropTypes from 'prop-types';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';

export const Search = (props) => {
  const { handleSubmit, handleChange, value } = props;

  const sx = {
    '& .MuiFilledInput-input': {
      paddingTop: '12px',
    },
    '& .MuiSvgIcon-root': {
      marginTop: '-12px',
      fontSize: '18px',
    },
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        style={{ paddingTop: '12px' }}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon>
                <SearchMdIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search..."
        value={value}
        sx={sx}
      />
    </Box>
  );
};

Search.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};
