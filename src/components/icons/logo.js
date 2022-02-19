import Image from 'next/image';
import SponsureLogo from 'assets/logos/sponsure_logo.svg';

const Logo = () => {
  return (
    <Image src={SponsureLogo} width={100} height={100} />
  );
};

export default Logo;
