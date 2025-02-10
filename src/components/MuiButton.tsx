import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const MuiButton = () => {
  return (
    <>
      <Stack direction="row" spacing={5}>
        <Button
          variant="text"
          size="small"
          color="info"
          sx={{ backgroundColor: "#000" }}
        >
          Text
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="success"
          startIcon={<DeleteIcon />}
        >
          Contained size medium
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="warning"
          endIcon={<SendIcon />}
        >
          Outlined size large
        </Button>
        <IconButton
          color="error"
          aria-label="delete"
          sx={{
            "&:hover": { backgroundColor: "transparent" },
            width: 100,
            height: 100,
          }}
        >
          <DeleteIcon />
        </IconButton>
        <Button
          variant="contained"
          size="medium"
          color="success"
          disableTouchRipple
          onClick={() => alert("Success")}
        >
          Success
        </Button>
        <Button variant="contained" size="medium" color="error">
          Error
        </Button>
        <Button variant="contained" size="medium" color="info">
          Info
        </Button>
        <Button variant="contained" size="medium" color="warning">
          Warning
        </Button>
        <Button variant="contained" size="medium" color="primary">
          Primary
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          Secondary
        </Button>
      </Stack>
      <Stack direction="row" sx={{ marginTop: 2 }}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="large"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button
            onClick={() => {
              alert("Demo Button Group");
            }}
          >
            Left
          </Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default MuiButton;
