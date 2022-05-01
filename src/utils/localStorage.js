export const localSet = (value) => {
  const stringValue = JSON.stringify(value);

  localStorage.setItem('user', stringValue);
} 

export const localGet = (value) => {
  return JSON.parse(localStorage.getItem(value));
}

export const localClear = () => {
  localStorage.clear();
  window.location.href = '/login';
}