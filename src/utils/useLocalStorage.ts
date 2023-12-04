import { useCallback, useState } from "react";

export function useLocalStorage(key: string, initialValue: unknown = ''){
  const [state, setState] = useState(()=>{
    try{
      const storedvalue = localStorage.getItem(key);

      return storedvalue ? JSON.parse(storedvalue) : initialValue;
    }catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value: unknown)=> {
    try{
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));

    }catch (error) {
      console.log(error);
    }
  }, [key])

  return [state, setValue];
}