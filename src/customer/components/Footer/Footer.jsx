import { Button } from "@headlessui/react";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
        className="text-center mt-10"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Location
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Careers
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Product 1
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Product 2
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Product 3
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Support
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Contact Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              FAQs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Help Center
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Insights
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Case Studies
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Reports
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>{" "}
          I
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            />
            Freepik
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
