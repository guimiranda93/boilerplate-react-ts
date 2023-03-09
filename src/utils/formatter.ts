export const currencyFormatter = (
  value: number,
  options?: {
    significantDigits?: number;
    symbol?: string;
    thousandsSeparator?: string;
    decimalSeparator?: string;
    invert?: boolean;
    space?: boolean;
  },
) => {
  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: '.',
    decimalSeparator: ',',
    symbol: 'R$',
    invert: false,
    space: true,
  };
  if (typeof value !== 'number') value = 0.0;
  options = { ...defaultOptions, ...options };
  const [currency, decimal] = Math.abs(value).toFixed(options.significantDigits).split('.');
  if (options.invert) {
    return `${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator ?? defaultOptions.thousandsSeparator,
    )}${options.decimalSeparator}${decimal}${options.space ? ' ' : ''}${options.symbol}`;
  }
  return `${options.symbol}${options.space ? ' ' : ''}${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator ?? defaultOptions.thousandsSeparator,
  )}${options.decimalSeparator}${decimal}`;
};
