import { forwardRef } from 'react';
import * as styles from './input.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...rest }: Props, ref) => {
    return (
      <div className={styles.wrapper}>
        <input
          {...rest}
          className={styles.input}
          onFocus={(e) => {
            e.target.placeholder = '';
          }}
          onBlur={(e) => {
            e.target.placeholder = placeholder;
          }}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  },
);

export default Input;
