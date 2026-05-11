import { useEffect, useState } from "react";

export default function LoadingScreen({ loading }) {
  const [classValue, setClassValue] = useState("Loading_Screen");

  useEffect(() => {
    if (loading == true) {
      setClassValue("Loading_Screen Loading");
    } else {
      setClassValue("Loading_Screen");
    }
  }, [loading]);

  return (
    <div className={classValue}>
      <div className="spinner">Loading...</div>
    </div>
  );
}
