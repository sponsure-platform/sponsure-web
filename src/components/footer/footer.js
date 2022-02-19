/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import FooterWidget from 'components/footer/footer-widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';
import Logo from '../../assets/logos/sponsure_logo.svg';

export default function Footer() {
  return (
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.footerInner}>
              <img src={Logo} alt='sponsure logo' />
              <div sx={styles.foooterRightHalf} >
                {menuItems.map(({ id, title, items }) => (
                <FooterWidget key={id} title={title} items={items} />
                  ))}
              </div>
          </Box>
          <p sx={styles.copyright}>{'Copyright © '}{new Date().getFullYear()}{' Sponsure. All rights reserved.'}</p>
        </Box>
  );
}

const styles = {
  footerTopInner: {
    borderTop: '1px solid lightgrey',
   p: [10,60,10,60],
  },
  footerInner: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex:1,
    img: {
      maxWidth: ['150px','150px','250px','250px','250px', '250px'],
    },
  },
  foooterRightHalf: {
    mr: 50
  },
  copyright: {
    color: rgba('#0F2137', 0.8),
    fontSize: ['11px','11px','12px','14px','16px','16px'],
    mt: [30],
    textAlign: ['center', 'center', 'center', 'center', 'center', 'center'],
  },
};
