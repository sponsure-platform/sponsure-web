import Image from 'next/image';
import SponsureLogo from 'assets/images/sponsure_logo.svg';

const Logo = () => {
  return (
    <Image src={SponsureLogo} sizes="50vw" width={185.92} height={36.62} />
  );
};

export default Logo;
