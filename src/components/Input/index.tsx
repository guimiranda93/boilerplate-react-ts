import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import { InputProps } from './Input';

const Input: React.FC<InputProps> = ({
  onChangeText,
  value,
  placeholder,
  multline,
  autoCapitalize = 'sentences',
  maskType,
  required,
  disabled,
  type,
  fullWidth,
  iconRight,
}) => {
  useEffect(() => {
    if (value) {
      changeValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const changeValue = (v: string) => {
    let x: string | null | RegExpMatchArray = '';

    switch (maskType) {
      case 'phone':
        if (v.length > 14) {
          x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);

          if (x) {
            v = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
          }
        } else {
          x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
          if (x) {
            v = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
          }
        }
        break;
      case 'cpf':
        x = v.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

        if (x) {
          v = !x[2]
            ? x[1]
            : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
        }

        break;
      case 'cpf_cnpj':
        if (v.length >= 15) {
          x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);

          if (x) {
            v = !x[2]
              ? x[1]
              : x[1] +
                '.' +
                x[2] +
                (x[3] ? '.' + x[3] : '') +
                (x[4] ? '/' + x[4] : '') +
                (x[5] ? '-' + x[5] : '');
          }
        } else {
          x = v.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

          if (x) {
            v = !x[2]
              ? x[1]
              : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
          }
        }

        break;
      case 'zipCode':
        x = v.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);

        if (x) {
          v = !x[2] ? x[1] : x[1] + '-' + x[2];
        }
        break;
      case 'date':
        x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);

        if (x) {
          v = !x[2] ? x[1] : x[1] + '/' + x[2] + (x[3] ? '/' + x[3] : '');
        }
        break;
      case 'money':
        if (!isNaN(parseInt(v.replace(/[^0-9.]/g, '')))) {
          if (v.substring(v.length - 1) !== ',' && v.substring(v.length - 1) !== '.') {
            const decimals = v.split(',');
            const numberValue = parseFloat(v.replace(',', '.').replace(/[^0-9.]/g, ''));

            if (decimals[1]?.length > 0) {
              v = `R$ ${numberValue
                .toFixed(decimals[1].length > 2 ? 2 : decimals[1].length)
                .toString()
                .replace('.', ',')}`;
            } else {
              v = `R$ ${numberValue.toString().replace('.', ',')}`;
            }
          } else {
            v = v.replace('.', ',');
          }
        } else {
          v = 'R$ 0';
        }

        break;
      case 'cvv':
        x = v.replace(/\D/g, '').match(/(\d{0,4})/);
        if (x) {
          v = x[0];
        }
        break;
      case 'expiration_date':
        x = v.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/);

        if (x) {
          v = !x[2] ? x[1] : x[1] + '/' + x[2];
        }
        break;
      case 'card':
        x = v.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

        if (x) {
          v = !x[2]
            ? x[1]
            : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
        }
        break;
      default:
        break;
    }

    onChangeText(v);
  };

  return (
    <TextField
      disabled={disabled}
      required={required}
      label={placeholder}
      variant='outlined'
      value={value}
      onChange={(text) => changeValue(text.target.value)}
      fullWidth={fullWidth}
      autoCapitalize={autoCapitalize}
      multiline={multline}
      rows={6}
      type={type || 'text'}
      inputProps={{
        autoComplete: 'new-password',
      }}
      InputProps={{
        endAdornment: iconRight,
      }}
    />
  );
};

export default Input;
