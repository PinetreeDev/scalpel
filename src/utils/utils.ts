
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function createTypeClasses(type) {
  return (typeof type === 'string' && type.length > 0) ? {
    [`scpl-type-${type}`]: true
  } : undefined;
}
