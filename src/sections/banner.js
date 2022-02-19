/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Label,
  Image,
  Button,
} from 'theme-ui';
import Input from 'components/input';
import social from 'assets/images/social.jpg';
import { rgba } from 'polished';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">
            Grow your online presence through influencer marketing
            </Heading>
            <Text as="p">
            Are you an influencer or a brand? Sign in for early access. We’ll ensure you’re the first one to know when we launch!
            </Text>
            <Box sx={styles.subscribe}>
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
              />
              <Button variant="primary">Get Early Access</Button>
            </Box>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={social} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    // mt: [null, null, null, null, null, 100],
    display: ['block', null, null, null, 'grid', 'flex'],
    gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
    gap: [0, 0, 0, 0, 40],
    alignItems: 'center',
    minHeight: [null, null, '100vh', '70vh', '50vh', '100vh'],
    pt: [null, 100, 100, 80, 90, null],
    textAlign: ['center', 'center','center','center','center', 'left'],
  },
  content: {
    maxWidth: [null, null, null,'85%' ,'85%', '70%'],
    minWidth: [null, null, null,'85%' ,'75%', '55%'],
    margin: [null, null, null, '0 auto', 0],
    textAlign: [null, null, null, 'center', 'left'],
    h1: {
      color: 'textSecondary',
      fontFamily: 'Crimson Text, Serif',
      fontWeight: 600,
      fontSize: ['34px', '34px', '34px', '36px', '36px', '44px'],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
    },
    p: {
      maxWidth: [450, null, null, 'none', 450],
      fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      mt: ['25px', null, null, null, 4],
    },
  },
  subscribe: {
    display: 'flex',
    alignItems: 'center',
    mt: ['40px'],
    input: {
      mr: ['15px'],
      minHeight: ['45px', null, null, 60, 50, null, 60],
    },
    button: {
      minHeight: ['45px', null, null, 60, 50, null, 60],
      fontSize: ['12px', '12px', '12px'],
    },
  },
  illustration: {
    ml: [0, 0, '30px', 0, 0,0],
    mt: ['50px', null, null, null, 0],
    minWidth: ['auto', null, null, null, null, '50%'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      minWidth: ['100%', null, null, '80%', '100%','100%'],
    },
  },
};
