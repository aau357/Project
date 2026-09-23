// import { useState } from "react";
// const Pricing = () => {
//     function Counter() {
//         const [count, setCount] = useState<number>(0);
//         return (
//              <button onClick={() => setCount(count + 1)}>
//             Bosildi: {count}
//         </button>
//         )
//     }

//     export default Pricing


import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Bosildi: {count}
    </button>
  );
}

const Pricing = () => {
  return <Counter />;
};

export default Pricing;