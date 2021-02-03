import { useState } from "react";
const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10);

function handleClick() {
    if (count != 0) {
        setCount(count -1);
    }
    
}

    return (
        <div>
            <p>
                {count != 0 ? `${count} little monkeys` : "no more monkeys jumping on bed"}
            </p>
            {/* <p>Monkey Statemen</p> */}
            <button onclick={handleClick}>Click Here</button>
        </div>
    );
};

export default TenLittleMonkeys;
