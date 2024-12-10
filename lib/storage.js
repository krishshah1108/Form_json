const STORAGE_KEY = 'formData';

export const saveData = (data) => {
  const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  existingData.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));
};

export const getData = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const deleteData = (index) => {
  const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  existingData.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));
};

export const clearData = () => localStorage.removeItem(STORAGE_KEY);
