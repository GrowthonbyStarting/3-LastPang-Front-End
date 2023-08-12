import Input from '@/components/common/Input';
import * as styles from './steps.css';
import { forwardRef } from 'react';

const Nickname = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>닉네임 입력</p>
        <h2 className={styles.heading}>
          프로필에 사용할 <br />
          닉네임을 입력해주세요.
        </h2>
      </div>
      <div>
        <Input {...props} ref={ref} placeholder="닉네임을 적어주세요." />
      </div>
    </div>
  );
});

export default Nickname;
