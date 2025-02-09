import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Hello World</Typography>
      <Typography variant="h2">h2 Hello World</Typography>
      <Typography variant="h3">h3 Hello World</Typography>
      <Typography variant="h4">h4 Hello World</Typography>
      <Typography variant="h5">h5 Hello World</Typography>
      <Typography variant="h6">h6 Hello World</Typography>
      <Typography variant="subtitle1">h6 Hello World</Typography>
      <Typography variant="subtitle2">h6 Hello World</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
        nemo molestiae id obcaecati libero! Ad eius natus non hic aliquid
        obcaecati! Harum odio laborum, voluptas assumenda reprehenderit ad
        beatae.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
        nemo molestiae id obcaecati libero! Ad eius natus non hic aliquid
        obcaecati! Harum odio laborum, voluptas assumenda reprehenderit ad
        beatae.
      </Typography>

      {/* Việc sử props component h2 ở đây mang ý nghĩa :
       * Văn bản sẽ được hiển thị với kiểu dáng, font chữ, fontsize, font-weight của h1
       * Nhưng trong cấu trúc của html thì nó sẽ được hiển thị với thẻ h2
       * Điều này giúp cho việc SEO tốt hơn
       */}
      <Typography variant="h1" component="h2">
        h1 component h2 Hello World
      </Typography>
    </div>
  );
};

export default MuiTypography;
