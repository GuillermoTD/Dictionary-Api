import {useState,useEffect} from 'react'


export function fetchApi (url:string,options?:RequestInit){
    const [data,setData] = useState<any>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string | null>(null)

    // const fetchApi = async ({url:string})=>{
    //     if(!url) return;


    //     //Este codigo servira para detener la consulta a la api 
    //     //en caso de que el componente sea desmontado
    //     const controller = new AbortController;
    //     const signal = controller.signal;

    //     setLoading(true)


    //     const apiFetch = await fetch(url,{...options,signal})
    //     const response = await apiFetch.json()

    // }

    useEffect(()=>{
        const controller = new AbortController;
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
              const res = await fetch(url, { ...options, signal });
              if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
              }
              const json = (await res.json());
              setData(json);
            } catch (err) {
              if (err instanceof Error && err.name !== "AbortError") {
                setError(err.message);
              }
            } finally {
              setLoading(false);
            }
        };

          fetchData();
          return () => controller.abort(); //Esto permite que se asegure que se limpien los efectos de este component
    },[url,options]);

    return { data, loading, error };
}