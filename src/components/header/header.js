/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
// import Logo from 'components/logo';
import { NavLink } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import DrawerNav from './drawer-nav';
import menuItems from './header.data';
import Logo from '../../assets/logos/sponsure_logo.svg';

export default function Header() {
  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky as="sticky" enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
          <Box as="header" variant="layout.header">
              <Box sx={styles.headerInner}>
                {/* <Logo sx={styles.logo} /> */}
                <img as sx={styles.logo} src={Logo} alt={'sponsure logo'} />
                <Flex as="nav" sx={styles.navbar} className="navbar">
                  <Box as="ul" sx={styles.navList}>
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        <NavLink path={path} label={label} />
                      </li>
                    ))}
                  </Box>
                  <Button variant="text" sx={styles.getStartedDesktop}>
                    Get Started
                  </Button>
                </Flex>
                <Button variant="text" sx={styles.getStartedMobile}>
                  Get Started
                </Button>
                <DrawerNav />
              </Box>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    header: {
      position: 'fixed',
      left: 0,
      right: 0,
      transition: 'all 0.3s ease-in-out 0s',
      '&.is-mobile-menu': {
        backgroundColor: 'white',
      },
    },
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      },
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // p: [10,20,10,20],
    '@media only screen and (max-width: 768px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: 'white',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        minHeight: 'calc(100vh - 77px)',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible',
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5,
          },
          a: {
            color: 'text',
          },
        },
      },
    },
  },
  logo: {
    mr: [null, null, null, null, 50],
    ml: [null, null, null, null, 30],
    width: '180px',
    float: 'left'
    // height: '100px'
    // p: 10
  },
  navbar: {
    alignItems: 'center',
    flexGrow: 1,
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    flexGrow: 1,
    p: 0,
    'li:last-child': {
      ml: ['auto'],
    },
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [0, 0, 0, 0, '0 20px'],
    },
    '.active': {
      color: 'primary',
    },
  },
  getStartedDesktop: {
    color: 'primary',
    display: ['none', null, null, null, 'flex'],
  },
  getStartedMobile: {
    color: '#F94962',
    fontSize: [12, null, null, 16],
    minHeight: 30,
    m: ['0 15px 0 auto'],
    padding: '0 11px',
    display: ['flex', null, null, null, 'none'],
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: 'text',
    },
  },
};
