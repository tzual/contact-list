export const html = (strings, ...values) => {
  let result = '';
  strings.forEach((string, i) => {
    result += string + (values[i] || '');
  });
  const template = document.createElement('template');
  template.innerHTML = result;
  return template.content.cloneNode(true);
}
