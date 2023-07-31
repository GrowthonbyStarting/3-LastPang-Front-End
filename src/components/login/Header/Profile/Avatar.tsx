import Image from 'next/image';

import {
  profileWrapper,
  avatar,
  profileName,
  featuredAvatar,
  featuredName,
} from './profile.css';

interface Props {
  featured?: boolean;
  name: string;
}

export default function Avatar({ featured, name }: Props) {
  const avatarClass = `${avatar} ${featured && featuredAvatar}`;
  const nameClass = `${profileName} ${featured && featuredName}`;

  return (
    <div className={profileWrapper}>
      <div className={avatarClass}>
        <Image
          src="/avatar_default.svg"
          alt="Profile Avatar"
          width={50}
          height={50}
        />
      </div>
      <p className={nameClass}>{name}</p>
    </div>
  );
}