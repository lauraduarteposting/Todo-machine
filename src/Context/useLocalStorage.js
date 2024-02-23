import { useState, useEffect } from "react";
function useLocalStorage(itenName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itenName);
        let parsedItem;

        if (!localStorageTodos) {
          localStorage.setItem(itenName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itenName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, saveItem, loading, error };
}
export { useLocalStorage };
