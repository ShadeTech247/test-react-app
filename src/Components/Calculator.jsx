import { useState } from "react";
import Mexp from "math-expression-evaluator";

function Button({ value, onclick }) {
  return <button className="text-4xl border border-white" onClick={onclick}>{value}</button>;
}
function Calculator() {
  const [number, setNumber] = useState("0");
  const mexp = new Mexp();

  return (
    <div className="bg-[#242424] p-5">
      <div className="text-right w-11/12 bg-gray-900 mx-auto py-3 pr-3 text-3xl">{number}</div>
      <div className="grid grid-cols-4 w-11/12 mx-auto">
        <Button value="7" onclick={() => setNumber(number=>number+"7")}/>
        <Button value="8" onclick={() => setNumber(number=>number+"8")}/>
        <Button value="9" onclick={() => setNumber(number=>number+"9")}/>
        <Button value="/" onclick={() => setNumber(number=>number+"/")}/>
        <Button value="4" onclick={() => setNumber(number=>number+"4")}/>
        <Button value="5" onclick={() => setNumber(number=>number+"5")}/>
        <Button value="6" onclick={() => setNumber(number=>number+"6")}/>
        <Button value="*" onclick={() => setNumber(number=>number+"*")}/>
        <Button value="1" onclick={() => setNumber(number=>number+"1")}/>
        <Button value="2" onclick={() => setNumber(number=>number+"2")}/>
        <Button value="3" onclick={() => setNumber(number=>number+"3")}/>
        <Button value="-" onclick={() => setNumber(number=>number+"-")}/>
        <Button value="Clear" onclick={() => setNumber("0")}/>
        <Button value="0" onclick={() => setNumber(number=>number+"0")}/>
        <Button value="=" onclick={() => setNumber(number=>mexp.eval(number))}/>
        <Button value="+" onclick={() => setNumber(number=>number+"+")}/>
      </div>
    </div>
  );
}
export default Calculator;
