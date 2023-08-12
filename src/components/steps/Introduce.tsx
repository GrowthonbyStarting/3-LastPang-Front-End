import Input from '@/components/common/Input';
import * as styles from './steps.css';
import { IFormProps } from '@/types/form';

interface Props extends IFormProps {}

export default function Introduce({ register }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>소개글 작성</p>
        <h2 className={styles.heading}>
          나를 소개할 수 있는 <br />
          한마디를 적어주세요.
        </h2>
      </div>
      <div>
        <Input {...register('introduce')} placeholder="한줄로 나를 표현하기." />
      </div>
    </div>
  );
}
