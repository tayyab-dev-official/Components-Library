import { useEffect } from "react";
import Banner from "./Banner";

export default function Toast({ onClose, ...rest }) 
{
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <Banner {...rest} />
}
